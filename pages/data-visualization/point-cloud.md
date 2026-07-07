# <img src="assets/pointcloud.svg" width="34"/> Point Cloud

**Message type:** `sensor_msgs/PointCloud2`

Display a PointCloud2 message on the main view. Heavily throttled by default.

RGB data is rendered it by reducing it down to a set of averaged colours for fewer draw calls, which while not the most accurate, provides decent performance. Limiting the point count to sane amounts also goes a long way towards smooth rendering.

![Render](assets/screenshots/nav2_pc2_jag.jpg)

