# <img src="assets/markerarray.svg" width="34"/> Marker Array

**Message type:** `visualization_msgs/MarkerArray`

Visualize a MarkerArray. Currently supported types are ARROW, CUBE, SPHERE, CYLINDER, LINE_STRIP and TEXT_VIEW_FACING. Since each of these widgets adds another canvas layer, it makes more sense to aggregate regular Marker messages into a Marker Array to avoid some of that overhead.
