# Mission Planning

Widgets for commanding the robot: teleoperation, goals, and mission definition.

| | Widget | Message Type | Summary |
|---|--------|--------------|---------|
| <img src="assets/joystick.svg" width="30"/> | [Teleop Joystick](teleop-joystick.md) | `geometry_msgs/Twist` | Joystick used for publishing Twist messages, can be positioned anywhere on the screen and switched into holonomic mode. |
| <img src="assets/initialpose.svg" width="30"/> | [2D Pose Estimate](pose-estimate.md) | `geometry_msgs/PoseWithCovarianceStamped` | Send the `/initialpose` for navigation startup. Long press to open setup menu. |
| <img src="assets/simplegoal.svg" width="30"/> | [2D Nav Goal](nav-goal.md) | `geometry_msgs/PoseStamped` | Send a `/move_base_simple/goal`. Long press to open setup menu. |
| <img src="assets/waypoints.svg" width="30"/> | [Waypoint Mission](waypoints.md) | `nav_msgs/Path` `geometry_msgs/PoseArray` | Create missions with multiple waypoints, then send them as a Path or PoseArray message. Single tap to add a point, single tap to remove an existing one, hold and drag to move points. Adding a point on an existing line will add it between those two points. Long press to open setup menu. |
| <img src="assets/area.svg" width="30"/> | [Area Mission](area-mission.md) | `geometry_msgs/PolygonStamped` | Drag to select an area and publish it to a PolygonStamped topic. Since the area is a rectangle, the first polygon vertex will be at the cursor press, and the third vertex will be the press released point. Long press to open setup menu. |
| <img src="assets/button.svg" width="30"/> | [Button](button.md) | `std_msgs/Bool` `std_msgs/Empty` | A button with customizable text that displays the last message sent on a Bool topic and sends the inverse to toggle it when pressed. Also supports just sending messages to an Empty topic. Long press to open setup menu. |
| <img src="assets/altimeter_green.svg" width="30"/> <img src="assets/altimeter.svg" width="30"/> | [Altimeter](altimeter.md) | `std_msgs/Float32` | A side indicator that renders the Z value of a TF frame as depth/altitude depending on mode. Clicking the altimeter will publish a metric value as a Float32 value to the selected topic, so it can be used for marking a target depth/altitude. A yellow indicator arrow will display the last valid value received on the target topic. |
