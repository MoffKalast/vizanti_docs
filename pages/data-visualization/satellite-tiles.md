
# <img src="assets/satelite.svg" width="34"/> Satellite Tiles

**Message type:** `sensor_msgs/NavSatFix`

Display satellite imagery, by default from OpenStreetMap. Requires a NavSatFix origin with the correct frame in its header.

<video controls width="800"><source src="assets/video/satelite.mp4" type="video/mp4">  Your browser does not support the video tag.</video>


## About Projections

A `NavSatFix` message gives us a geodetic position: latitude, longitude and altitude on the WGS84 ellipsoid, plus a covariance estimate and a fix status. That's a position on a curved surface in angular units — ROS on the other hand works in flat, metric, right-handed cartesian frames, so the two need to be reconciled before GNSS data is of any use to the TF tree.

The standard way to do that (see [REP-105](https://www.ros.org/reps/rep-0105.html)) is:

1. Pick an **origin** — a reference lat/lon/alt, usually the first valid fix or a manually surveyed point.
2. Convert geodetic coordinates to **ECEF** (Earth-Centered, Earth-Fixed), a cartesian frame with its origin at the Earth's center, X through the prime meridian, Z through the north pole (see figure above).
3. Rotate and translate ECEF into a **local tangent plane** anchored at the origin — a flat plane touching the ellipsoid at that point. With the axes ordered East, North, Up you get **ENU**, which is exactly the ROS convention (X=east, Y=north, Z=up when the map frame is globally aligned).

![ENU projection](assets/screenshots/enu.jpg)

*https://en.wikipedia.org/wiki/Local_tangent_plane_coordinates*

The result is that every fix becomes a small metric `(east, north)` offset from your origin, which can be published as TF/Odometry like any other localization source. Near the origin this is essentially distortion-free, errors from the flat-plane assumption grow with distance (Earth curvature drops \~8 cm per km of horizontal distance in the Up axis, horizontal distortion stays negligible for typical robot operating areas). If Z is irrelevant for your nav stack, the only thing you have to watch for is sensors reporting magnetic north, which will drift as you move away from the origin but even that is miniscule (\~1 deg per 100 km).

### How the widget renders tiles

Vizanti fetches standard [Web Mercator slippy tiles](https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames) (`{z}/{x}/{y}.png`), but it does not render them in Web Mercator. For each tile it:

1. Converts the tile's four corner coordinates from tile indices to lat/lon (exact Mercator inverse),
2. projects each corner through an exact WGS84 geodetic → ECEF → topocentric ENU transformation anchored at the received fix,
3. texture-maps the tile image onto the resulting quad on screen.

The projection is the same math a GNSS localization backend uses (equivalent to pyproj's `+proj=cart` + `+proj=topocentric` pipeline). In other words the tiles are drawn where they actually are in ENU meters, including the slight trapezoid shape and convergence tiles have on a tangent plane. If your backend also uses a topocentric ENU projection with the same origin, the imagery and your TF tree line up exactly by construction, at any distance from the origin.

The ENU tangent plane is anchored at the coordinate and altitude of the latest received fix on the subscribed topic, and its origin is placed at that message's `header.frame_id` TF frame. In essence, it pins together the NavSatFix tile map on the given `frame_id` as the origin.

## Usage

There are two main approaches: relative to a receiver frame, and relative to a local origin.

### 1. Basic — Relative to a GNSS receiver

Most receiver drivers (i.e. nmea_navsat and ublox) will publish a NavSatFix relative to their receiver frame, e.g. `gps_link`, in which case the satellite tiles can be rendered directly relative to it, assuming your robot URDF has a transform to that link.

There are some problems with this approach however:

- You need to have the 'Ignore tf rotations' option enabled (it is by default) which nullifies any TF rotations from the fixed frame and up to the gps_link, which would otherwise transform the map tiles into odd directions.
- The tiles may jump around a bit as the fix and robot TF position changes, and they tend to be a bit out of sync unless you're operating directly from GNSS data only.
- Your robot needs to have a globally correct yaw rotation for the map to be oriented correctly.

### 2. Recommended — Relative to a local origin

As mentioned above, the standard way of doing things is to set up a local origin and transform the Lat/Lon NavSatFix data into zero-relative metric Odometry as described in the background section above. Conceptually:

- take a manually picked NavSatFix, or the first valid fix as your origin, and generate ENU transformed TF/Odometry relative to it
- change that NavSatFix's `header.frame_id` to correspond to the TF link (e.g. `world` or `local`) that you want to use as your origin (the parent frame of the GNSS Odometry)
- latch and publish it on a new topic, so the widget and other nodes can reference it
- subscribe the widget to that topic — since the origin fix never changes, the tiles are static and pinned to your origin frame

### Matching the backend projection

For a pixel-exact match with the renderer, project on the backend with pyproj's topocentric pipeline anchored at the same origin the widget receives:

```python
from pyproj import Transformer

lat0, lon0, alt0 = 46.05, 14.51, 300.0  # from an origin NavSatFix
pipeline = (
	f"+proj=pipeline "
	f"+step +proj=cart +ellps=WGS84 "
	f"+step +proj=topocentric +ellps=WGS84 +lat_0={lat0} +lon_0={lon0} +h_0={alt0}"
)
lla_to_enu = Transformer.from_pipeline(pipeline)
east, north, up = lla_to_enu.transform(lon, lat, alt, radians=False)
```

`+proj=tmerc` (a local transverse Mercator) is also a common and perfectly workable choice: it agrees with topocentric ENU to sub-centimeter near the origin. It does however carry a scale distortion growing quadratically with distance east/west of the origin meridian — roughly 1.2 cm at 1 km, 1.2 m at 10 km — so on a large site with high-precision RTK, prefer the topocentric pipeline. On typical robot scales the difference is invisible.

## Pitfalls

- **Match the altitude of both projections.** The widget anchors its ENU plane at the fix it receives, including altitude. If your backend zeroes out the Z axis, then that should also be applied to the NavSatFix given as the origin, otherwise the two ENU frames are subtly offset.
- **Altitude matters.** Projecting from a different ellipsoidal height scales the whole tangent plane by roughly `h/R` — about 16 cm per km of distance for a 1000 m altitude mismatch. Note that NavSatFix altitude is ellipsoidal (WGS84), not MSL, though some drivers get this wrong.
- **Fix status.** Messages with `status: -1` (no fix) or NaN coordinates are ignored. Some drivers (e.g. mavros) report an invalid status even with a valid fix — fix that on the backend before republishing.
- **Web Mercator range.** Tiles only exist between roughly ±85.05° latitude; the widget wraps horizontally across the antimeridian but there is no imagery for the poles. Apologies to all Artic and Antarctic roboticists.
- **Slippy map zoom availability.** The renderer assumes zoom levels up to 19 will be possible to fetch, which may not be the case for all tile servers or in all areas. E.g. Google Maps does not provide zoom levels over 10 in the middle of the Atlantic.
- **UTM.** UTM is not recommended in general: the coordinates are large, the distortions are location dependent. Note that northing and eastings are also not technically cartesian either, as the directions change continiously to point towards north, so it doesn't really work with ROS consistently.

More info:

- https://en.wikipedia.org/wiki/Earth-centered,_Earth-fixed_coordinate_system
- https://github.com/MoffKalast/vizanti/issues/52
