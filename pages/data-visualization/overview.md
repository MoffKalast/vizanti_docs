# Data Visualization

Widgets for rendering topic data, most are implementations of familiar visualizers seen in RViz.

| | Widget | Message Type | Summary |
|---|--------|--------------|---------|
| <img src="assets/navball_icon.svg" width="30"/> | [Attitude Indicator](attitude-indicator.md) | `tf2_msgs/TFMessage` `sensor_msgs/Imu` | A three axis navball for showing orientation from TF links and Imu messages. Shows the quaternion if given, otherwise fuses accelerometer and gyro data. |
| <img src="assets/odom.svg" width="30"/> | [Pose Tracker](pose-tracker.md) | `tf2_msgs/TFMessage` `nav_msgs/Odometry` | An analogue to the Odometry widget in RViz that renders the received history of a pose as a line with arrows, either from a topic or from any transform frame. |
| <img src="assets/map.svg" width="30"/> | [Map](map.md) | `nav_msgs/OccupancyGrid` | Display an OccupancyGrid. Also has some experimental map_server controls for saving and loading maps. |
| <img src="assets/satelite.svg" width="30"/> | [Satellite Tiles](satellite-tiles.md) | `sensor_msgs/NavSatFix` | Display satellite imagery, by default from OpenStreetMap. Requires a Fix origin with the correct frame in its header. |
| <img src="assets/gridcells.svg" width="30"/> | [GridCells](gridcells.md) | `nav_msgs/GridCells` | Displays a grid of cells. |
| <img src="assets/battery_100.svg" width="30"/> | [Battery](battery.md) | `sensor_msgs/BatteryState` | Display a BatteryState message. |
| <img src="assets/image.svg" width="30"/> | [Compressed Image](compressed-image.md) | `sensor_msgs/CompressedImage` | Display a CompressedImage message in a movable box anywhere on the screen. Heavily throttled by default. |
| <img src="assets/markerarray.svg" width="30"/> | [Marker Array](marker-array.md) | `visualization_msgs/MarkerArray` | Visualize a MarkerArray. Currently supported types are ARROW, CUBE, SPHERE, CYLINDER, LINE_STRIP and TEXT_VIEW_FACING. Since each of these widgets adds another canvas layer, it makes more sense to aggregate regular Marker messages into a Marker Array to avoid some of that overhead. |
| <img src="assets/path.svg" width="30"/> | [Path](path.md) | `nav_msgs/Path` | Render a Path message for navigation debugging. |
| <img src="assets/range.svg" width="30"/> | [Range](range.md) | `sensor_msgs/Range` | Render a Range message on the main view. Supports grouping multiple messages onto the same topic, as long as the tf frames are different. |
| <img src="assets/scan.svg" width="30"/> | [Laser Scan](laser-scan.md) | `sensor_msgs/LaserScan` | Display a LaserScan message on the main view. Heavily throttled by default. |
| <img src="assets/pointcloud.svg" width="30"/> | [Point Cloud](point-cloud.md) | `sensor_msgs/PointCloud2` | Display a PointCloud2 message on the main view. Heavily throttled by default. |
| <img src="assets/posewithcovariancestamped.svg" width="30"/> | [Pose with Covariance](pose-with-covariance.md) | `geometry_msgs/PoseWithCovarianceStamped` | Display a PoseWithCovarianceStamped message. The covariance rendering is currently experimental and will likely only display correctly for spherical covariance. |
| <img src="assets/posearray.svg" width="30"/> | [Pose Array](pose-array.md) | `geometry_msgs/PoseArray` | Display a PoseArray message. Throttled to 15 Hz. |
| <img src="assets/temp_warm.svg" width="30"/> | [Temperature](temperature.md) | `sensor_msgs/Temperature` | Display a Temperature message. Only as a widget for now, not on the view itself. |
| <img src="assets/speedometer_icon.svg" width="30"/> | [Speedometer](speedometer.md) | `tf2_msgs/TFMessage` | An indicator that tracks the relative speed of any two TF links and can display the value in various units. |
