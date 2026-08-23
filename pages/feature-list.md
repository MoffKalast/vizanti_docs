# Feature List

Everything in one place. Click any widget for its dedicated page.

## General Tools & Configuration

Aside from the required ones, custom widgets can be added to the navbar to customize functionality for a given robot and test setup.

> **Note:** Some icons open setup modals instantly, while others use a single press to trigger actions and use a long press to open the modal.

| | Widget | Message Type | Summary |
|---|--------|--------------|---------|
| <img src="assets/settings.svg" width="30"/> | [Global Settings](general-tools/global-settings.md) | / | Set the background color and the fixed TF frame. Also has a button to reset the camera view to zero and default zoom. |
| <img src="assets/rosbridge_connected.svg" width="30"/> | [Rosbridge](general-tools/rosbridge.md) | / | Shows the backend connection status. Green if a rosbridge compatible server is connected, yellow if attempting to reconnect, red if the connection has been lost. |
| <img src="assets/grid.svg" width="30"/> | [Grid](general-tools/grid.md) | / | The adjustable metric grid. Currently renders only in the fixed frame. |
| <img src="assets/tf.svg" width="30"/> | [TF](general-tools/tf.md) | / | Renders TF frames, same options as in RViz for the most part. |
| <img src="assets/robotmodel.svg" width="30"/> | [Robot Model](general-tools/robot-model.md) | / | Renders a 2D sprite to represent the robot model or any specific TF link. |
| <img src="assets/reconfigure.svg" width="30"/> | [Param Reconfigure](general-tools/param-reconfigure.md) | / | Adjust values of all nodes with reconfigurable parameters. Works through dynamic_reconfigure in Noetic, and standard node parameters in ROS 2. |
| <img src="assets/rosbag.svg" width="30"/> | [Bag Recorder](general-tools/bag-recorder.md) | / | Records specified topics by calling `rosbag record` via proxy. |
| <img src="assets/nodemgr.svg" width="30"/> | [Node Manager](general-tools/node-manager.md) | / | Launch nodes, kill nodes, see information about nodes and run other node debugging tools. |
| <img src="assets/inspector.svg" width="30"/> | [Topic Inspector](general-tools/topic-inspector.md) | / | A raw text visualizer for topic data, and publisher/subscriber info analogous to `rostopic echo` and `rostopic info`. |
| <img src="assets/diagnostics.svg" width="30"/> | [Diagnostics](general-tools/diagnostics.md) | `diagnostic_msgs/DiagnosticsArray` `rosgraph_msgs/Log` `rcl_interfaces/Log` | Similar to the topic inspector, but specialized for viewing key/value pairs of DiagnosticArray and rosout. |
| <img src="assets/folder.svg" width="30"/> | [Folder](general-tools/folder.md) | / | A way to group widgets together. |
| <img src="assets/add.svg" width="30"/> | [Add New Visualizer/Widget](general-tools/add-widget.md) | / | Self explanatory. |

## Mission Planning

Widgets for commanding the robot: teleoperation, goals, and mission definition.


| | Widget | Message Type | Summary |
|---|--------|--------------|---------|
| <img src="assets/joystick.svg" width="30"/> | [Teleop Joystick](mission-planning/teleop-joystick.md) | `geometry_msgs/Twist` | Joystick used for publishing Twist messages, can be positioned anywhere on the screen and switched into holonomic mode. |
| <img src="assets/initialpose.svg" width="30"/> | [2D Pose Estimate](mission-planning/pose-estimate.md) | `geometry_msgs/PoseWithCovarianceStamped` | Send the `/initialpose` for navigation startup. Long press to open setup menu. |
| <img src="assets/simplegoal.svg" width="30"/> | [2D Nav Goal](mission-planning/nav-goal.md) | `geometry_msgs/PoseStamped` | Send a `/move_base_simple/goal`. Long press to open setup menu. |
| <img src="assets/waypoints.svg" width="30"/> | [Waypoint Mission](mission-planning/waypoints.md) | `nav_msgs/Path` `geometry_msgs/PoseArray` | Create missions with multiple waypoints, then send them as a Path or PoseArray message. Single tap to add a point, single tap to remove an existing one, hold and drag to move points. Adding a point on an existing line will add it between those two points. Long press to open setup menu. |
| <img src="assets/survey.svg" width="30"/> | [Survey Mission](mission-planning/survey.md) | `nav_msgs/Path` `geometry_msgs/PoseArray` | Define an arbitrary polygon of an area to systematically survey, and the widget will run a solver to generate a lawnmower waypoint mission according to the given parameters and the defined start and end points. |
| <img src="assets/area.svg" width="30"/> | [Area Mission](mission-planning/area-mission.md) | `geometry_msgs/PolygonStamped` | Drag to select an area and publish it to a PolygonStamped topic. Since the area is a rectangle, the first polygon vertex will be at the cursor press, and the third vertex will be the press released point. Long press to open setup menu. |
| <img src="assets/button.svg" width="30"/> | [Button](mission-planning/button.md) | `std_msgs/Bool` `std_msgs/Empty` | A button with customizable text that displays the last message sent on a Bool topic and sends the inverse to toggle it when pressed. Also supports just sending messages to an Empty topic. Long press to open setup menu. |
| <img src="assets/altimeter_green.svg" width="30"/> <img src="assets/altimeter.svg" width="30"/> | [Altimeter](mission-planning/altimeter.md) | `std_msgs/Float32` | A side indicator that renders the Z value of a TF frame as depth/altitude depending on mode. Clicking the altimeter will publish a metric value as a Float32 value to the selected topic, so it can be used for marking a target depth/altitude. A yellow indicator arrow will display the last valid value received on the target topic. |

## Data Visualization

Widgets for rendering topic data, most are implementations of familiar visualizers seen in RViz.

| | Widget | Message Type | Summary |
|---|--------|--------------|---------|
| <img src="assets/navball_icon.svg" width="30"/> | [Attitude Indicator](data-visualization/attitude-indicator.md) | `tf2_msgs/TFMessage` `sensor_msgs/Imu` | A three axis navball for showing orientation from TF links and Imu messages. Shows the quaternion if given, otherwise fuses accelerometer and gyro data. |
| <img src="assets/odom.svg" width="30"/> | [Pose Tracker](data-visualization/pose-tracker.md) | `tf2_msgs/TFMessage` `nav_msgs/Odometry` | An analogue to the Odometry widget in RViz that renders the received history of a pose as a line with arrows, either from a topic or from any transform frame. |
| <img src="assets/map.svg" width="30"/> | [Map](data-visualization/map.md) | `nav_msgs/OccupancyGrid` | Display an OccupancyGrid. Also has some experimental map_server controls for saving and loading maps. |
| <img src="assets/satelite.svg" width="30"/> | [Satellite Tiles](data-visualization/satellite-tiles.md) | `sensor_msgs/NavSatFix` | Display satellite imagery, by default from OpenStreetMap. Requires a Fix origin with the correct frame in its header. |
| <img src="assets/gridcells.svg" width="30"/> | [GridCells](data-visualization/gridcells.md) | `nav_msgs/GridCells` | Displays a grid of cells. |
| <img src="assets/battery_100.svg" width="30"/> | [Battery](data-visualization/battery.md) | `sensor_msgs/BatteryState` | Display a BatteryState message. |
| <img src="assets/image.svg" width="30"/> | [Compressed Image](data-visualization/compressed-image.md) | `sensor_msgs/CompressedImage` | Display a CompressedImage message in a movable box anywhere on the screen. Heavily throttled by default. |
| <img src="assets/markerarray.svg" width="30"/> | [Marker Array](data-visualization/marker-array.md) | `visualization_msgs/MarkerArray` | Visualize a MarkerArray. Currently supported types are ARROW, CUBE, SPHERE, CYLINDER, LINE_STRIP and TEXT_VIEW_FACING. Since each of these widgets adds another canvas layer, it makes more sense to aggregate regular Marker messages into a Marker Array to avoid some of that overhead. |
| <img src="assets/path.svg" width="30"/> | [Path](data-visualization/path.md) | `nav_msgs/Path` | Render a Path message for navigation debugging. |
| <img src="assets/range.svg" width="30"/> | [Range](data-visualization/range.md) | `sensor_msgs/Range` | Render a Range message on the main view. Supports grouping multiple messages onto the same topic, as long as the tf frames are different. |
| <img src="assets/scan.svg" width="30"/> | [Laser Scan](data-visualization/laser-scan.md) | `sensor_msgs/LaserScan` | Display a LaserScan message on the main view. Heavily throttled by default. |
| <img src="assets/pointcloud.svg" width="30"/> | [Point Cloud](data-visualization/point-cloud.md) | `sensor_msgs/PointCloud2` | Display a PointCloud2 message on the main view. Heavily throttled by default. |
| <img src="assets/posewithcovariancestamped.svg" width="30"/> | [Pose with Covariance](data-visualization/pose-with-covariance.md) | `geometry_msgs/PoseWithCovarianceStamped` | Display a PoseWithCovarianceStamped message. The covariance rendering is currently experimental and will likely only display correctly for spherical covariance. |
| <img src="assets/posearray.svg" width="30"/> | [Pose Array](data-visualization/pose-array.md) | `geometry_msgs/PoseArray` | Display a PoseArray message. Throttled to 15 Hz. |
| <img src="assets/temp_warm.svg" width="30"/> | [Temperature](data-visualization/temperature.md) | `sensor_msgs/Temperature` | Display a Temperature message. Only as a widget for now, not on the view itself. |
| <img src="assets/speedometer_icon.svg" width="30"/> | [Speedometer](data-visualization/speedometer.md) | `tf2_msgs/TFMessage` | An indicator that tracks the relative speed of any two TF links and can display the value in various units. |
