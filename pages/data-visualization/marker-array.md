# <img src="assets/markerarray.svg" width="34"/> Marker Array

**Message type:** `visualization_msgs/MarkerArray`

Visualize a MarkerArray. Currently supported types are ARROW, CUBE, SPHERE, CYLINDER, LINE_STRIP and TEXT_VIEW_FACING. Since each of these widgets adds another canvas layer, it makes more sense to aggregate regular Marker messages into a Marker Array to avoid some of that overhead.

Rviz parity test:

![Render](assets/screenshots/markerarray.jpg)

Octomap test:

![Render](assets/screenshots/octomap.jpg)

TRIANGLE_LIST test:

<video controls width="800"><source src="assets/video/trianglelist.mp4" type="video/mp4">  Your browser does not support the video tag.</video>

As in rviz, namespacing can be used to separate and toggle marker types:

![Render](assets/screenshots/markerarray_ui.jpg)