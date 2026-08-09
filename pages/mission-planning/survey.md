# <img src="assets/survey.svg" width="34"/> Survey Mission

**Message types:** `nav_msgs/Path`, `geometry_msgs/PoseArray`


Define an arbitrary polygon of an area to systematically survey, and the widget will run a solver to generate a lawnmower waypoint mission according to the given parameters and the defined start and end points. Tap to add a vertex, tap on an existing vertex to remove it, hold and drag to move existing ones.

The message/backend behaviour is the same as with [the Waypoints widget](waypoints.md), so see the doc on that for more info on how to parse the path data a ROS node will receive after sending it.

<video controls width="800"><source src="assets/video/survey.mp4" type="video/mp4">  Your browser does not support the video tag.</video>

> Note: This widget is new and still experimental, a dose of common sense is recommended when testing it. The path is fully regenerated on every change, so there is no way to nudge individual waypoints. Concave polygons are fine, but fully enclosed holes are not yet supported.

## Initial generation

The first time a polygon reaches 3 vertices, the widget checks how many lines the current settings would produce. If the values are out of range, it sets the parameters to roughly divide the area into 10 lines. This only happens on that first transition, to make sure it's actually possible to generate a path when scale is extremely large (e.g. kilometer sizes aerial missions) and to provide a more usable starting point at room-sized scales.

A green start and red finish marker will appear once at least three vertices are defined, placed to either side of the robot's current position along X. Both can be dragged around, but not deleted. They are the entry and exit points of the mission and dictate the order in which the pattern is generated, optimizing for minimal route length for the given coverage parameters with those two additional constraints. 

Transect order built using a heuristic search, and is not a true optimum. On awkward concave shapes you may get an order that looks weird, in which case moving the starting and end point can help improve the situation.

## Menu commands

- <img src="assets/survey_dropdown_start.svg" width="22"/> **Start** → sends the generated survey path, the yaw at each point facing the next one
- <img src="assets/survey_dropdown_stop.svg" width="22"/> **Stop** → sends an empty array, which the nav side can interpret as an abort
- <img src="assets/survey_dropdown_xy.svg" width="22"/> **Edit XY** → polygon editing mode
- <img src="assets/survey_dropdown_z.svg" width="22"/> **Edit Z** → edits the Z value of each polygon vertex, waypoint heights are interpolated from those (not well tested yet!)

## Params

- **Fixed frame:** The frame the polygon vertices and markers are defined in, and the `frame_id` of the published message. Note that if this frame ever moves, the polygon moves.

- **Robot frame:** Only used once, to place the initial start/end markers near the robot. It is *not* used for a closest-waypoint feature like in Waypoints; there is no partial resume yet.

- **Line spacing (meters):** Distance between adjacent transects, higher densities will take much longer to generate.

- **Line angle (degrees):** Direction of the transects relative to East/ENU.

- **Turnaround distance (meters):** How far each transect is extended past the polygon boundary so the vehicle has room to turn. It also defines an outer polygon, which transit legs are routed along.

- **Allow direct transit across uncharted gaps:** Does the vehicle cross the polygon when transiting or not? By default it try to avoid it to make sure data collection is relatively uniform, but relaxing this should make for a shorter overall path.

- **Repeat at 90° (criss-cross):** Runs a second pass perpendicular to the first one after it finishes in its entirety.

## Other notes

Self-intersecting polygons, duplicate vertices or degenerate shapes can produce nonsense.

The turnaround offset is a miter offset and assumes reasonable scale and parametrization. Very large turnaround values relative to the polygon size can cause weirdness.