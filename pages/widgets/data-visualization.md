# Data Visualization

## <img src="https://github.com/user-attachments/assets/c3cb8930-e206-43f2-be93-ad2a18ff13b8" width="30"/> Attitude Indicator

**Message types:** `tf2_msgs/TFMessage`, `sensor_msgs/Imu`

A three axis navball for showing orientation from TF links and Imu messages. Shows the quaternion if given, otherwise fuses accelerometer and gyro data.

## <img src="https://github.com/user-attachments/assets/e4a7a3a4-f9ca-458c-b487-b462e9fa9d0a" width="30"/> Pose Tracker

**Message types:** `tf2_msgs/TFMessage`, `nav_msgs/Odometry`

An analogue to the Odometry widget in RViz that renders the received history of a pose as a line with arrows, either from a topic or from any transform frame.

## <img src="https://github.com/MoffKalast/vizanti/assets/9977799/e0544bec-1a3d-4c15-acc8-c9c1a72b7671" width="30"/> Map

**Message type:** `nav_msgs/OccupancyGrid`

Display an OccupancyGrid. Also has some experimental map_server controls for saving and loading maps.

## <img src="https://github.com/MoffKalast/vizanti/assets/9977799/17b23cf0-fb5a-4b2c-b329-ef6e55e59c22" width="30"/> Satellite Tiles

**Message type:** `sensor_msgs/NavSatFix`

Display satellite imagery, by default from OpenStreetMap. Requires a Fix origin with the correct frame in its header.

See the in-depth guide: [Satellite Tiles](satellite-tiles.md).

## <img src="https://github.com/MoffKalast/vizanti/assets/9977799/ae03f3a1-3152-4899-bef0-a940ce712540" width="30"/> GridCells

**Message type:** `nav_msgs/GridCells`

Displays a grid of cells.

## <img src="https://github.com/MoffKalast/vizanti/assets/9977799/c9348b8b-63ec-4743-bfbd-51a50496fa28" width="30"/> Battery

**Message type:** `sensor_msgs/BatteryState`

Display a BatteryState message.

## <img src="https://github.com/MoffKalast/vizanti/assets/9977799/548ca04e-2066-489c-8840-b4fee9401e2d" width="30"/> Compressed Image

**Message type:** `sensor_msgs/CompressedImage`

Display a CompressedImage message in a movable box anywhere on the screen. Heavily throttled by default.

## <img src="https://github.com/MoffKalast/vizanti/assets/9977799/739c39ec-0bcf-429c-b399-6c345daf6d4f" width="30"/> Marker Array

**Message type:** `visualization_msgs/MarkerArray`

Visualize a MarkerArray. Currently supported types are ARROW, CUBE, SPHERE, CYLINDER, LINE_STRIP and TEXT_VIEW_FACING. Since each of these widgets adds another canvas layer, it makes more sense to aggregate regular Marker messages into a Marker Array to avoid some of that overhead.

## <img src="https://github.com/MoffKalast/vizanti/assets/9977799/ab638d71-eb72-411b-b24d-07081cd24b32" width="30"/> Path

**Message type:** `nav_msgs/Path`

Render a Path message for navigation debugging.

## <img src="https://github.com/MoffKalast/vizanti/assets/9977799/0cc6ddbd-2b59-4500-8553-ac05ac4c628d" width="30"/> Range

**Message type:** `sensor_msgs/Range`

Render a Range message on the main view. Supports grouping multiple messages onto the same topic, as long as the tf frames are different.

## <img src="https://github.com/MoffKalast/vizanti/assets/9977799/8d88c1e0-51f5-4be2-8cf5-890841b30c48" width="30"/> Laser Scan

**Message type:** `sensor_msgs/LaserScan`

Display a LaserScan message on the main view. Heavily throttled by default.

## <img src="https://github.com/MoffKalast/vizanti/assets/9977799/c7acacba-d530-46d3-b44f-19c66f79effd" width="30"/> Point Cloud

**Message type:** `sensor_msgs/PointCloud2`

Display a PointCloud2 message on the main view. Heavily throttled by default.

## <img src="https://github.com/MoffKalast/vizanti/assets/9977799/356f3192-d135-43a1-8b08-b2deadf1da69" width="30"/> Pose with Covariance (Stamped)

**Message type:** `geometry_msgs/PoseWithCovarianceStamped`

Display a PoseWithCovarianceStamped message. The covariance rendering is currently experimental and will likely only display correctly for spherical covariance.

## <img src="https://github.com/MoffKalast/vizanti/assets/9977799/540c39af-31ad-4525-b916-905878691c35" width="30"/> Pose Array

**Message type:** `geometry_msgs/PoseArray`

Display a PoseArray message. Throttled to 15 Hz.

## <img src="https://github.com/MoffKalast/vizanti/assets/9977799/c8f343c8-8251-4b34-bd14-43d160198550" width="30"/> Temperature

**Message type:** `sensor_msgs/Temperature`

Display a Temperature message. Only as a widget for now, not on the view itself.

## <img src="https://github.com/user-attachments/assets/6900e33b-9fea-4381-9191-77ff69de1afb" width="30"/> Speedometer

**Message type:** `tf2_msgs/TFMessage`

An indicator that tracks the relative speed of any two TF links and can display the value in various units.
