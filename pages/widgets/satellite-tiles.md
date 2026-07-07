# <img src="https://github.com/user-attachments/assets/f56914ce-dd1d-4f3e-b966-60ec6f7a47aa" width="34"/> Satellite Tiles

There are two main approaches for using the Satellite Tiles widget: relative to a receiver frame, and relative to a local origin.

## 1. Basic — Relative to a GNSS receiver

Most receiver drivers (i.e. nmea_navsat and ublox) will publish a NavSatFix relative to their receiver frame, e.g. `gps_link`, in which case the satellite tiles can be rendered directly relative to it. Assuming your robot URDF has a transform to that link.

There are some problems with this approach however:

- You need to have the 'Ignore tf rotations' option enabled which nullifies any TF rotations from the fixed frame and up to the gps_link, which would otherwise transform the map tiles into odd directions.
- The tiles may jump around a bit as the fix and robot TF position changes, they tend to be a bit out of sync unless you're operating directly from GNSS data only.
- Your robot needs to have a globally correct yaw rotation for the map to be oriented correctly.

## 2. Recommended — Relative to a local origin

What most localization setups that use GNSS in some area do is define a local origin and transform the Lat/Lon NavSatFix data into zero-relative metric Odometry using either ENU (ROS standard, same as NED but rotated) which operates on a flat tangent plane relative to the origin and UTM with a system of flat plane zones.

Conceptually the idea is the following:

- take a manually picked NavSatFix, or the first valid fix as your origin, and generate ENU transformed TF/Odometry relative to it
- change that NavSatFix's `header.frame_id` to correspond to the TF link (e.g. `world` or `local`) that you want to use as your origin (the parent frame of the GNSS Odometry)
- latch and publish it on a new topic, so the widget and other nodes can reference it
- the tiles should now be static, rendered relative to your origin

In theory the navsat_transform_node can do that process for you, otherwise it's not overly complicated to do it manually with pyproj or similar. Here's a ROS 1 [example node for ENU](https://github.com/MoffKalast/utm_ros/blob/ros1/scripts/gnss_to_enu.py) and [for UTM](https://github.com/MoffKalast/utm_ros/blob/ros1/scripts/gnss_to_utm.py) odometry and local origin generation.

Vizanti renders tiles at the size that Web Mercator claims they are for each zoom level and latitude, which should _mostly_ correspond to ENU as intended to be used in ROS, but there will be small deviations that increase as you go further away from the origin. ENU and UTM are rotationally the same, so both will work, though UTM generally performs worse in terms of accuracy on typical robot scales.

More info:

- https://en.wikipedia.org/wiki/Local_tangent_plane_coordinates
- https://github.com/MoffKalast/vizanti/issues/52
