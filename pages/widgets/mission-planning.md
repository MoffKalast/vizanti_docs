# Mission Planning

## <img src="https://github.com/MoffKalast/vizanti/assets/9977799/926661f9-28fb-4cd2-8ad8-34d1f9169717" width="30"/> Teleop Joystick

**Message type:** `geometry_msgs/Twist`

Joystick used for publishing Twist messages, can be positioned anywhere on the screen and switched into holonomic mode.

## <img src="https://github.com/MoffKalast/vizanti/assets/9977799/93730c54-196a-4e54-b463-84a75edeea74" width="30"/> 2D Pose Estimate

**Message type:** `geometry_msgs/PoseWithCovarianceStamped`

Send the `/initialpose` for navigation startup. Long press to open setup menu.

## <img src="https://github.com/MoffKalast/vizanti/assets/9977799/d194c2c2-6bb2-4d97-96f4-04f422076e95" width="30"/> 2D Nav Goal

**Message type:** `geometry_msgs/PoseStamped`

Send a `/move_base_simple/goal`. Long press to open setup menu.

## <img src="https://github.com/MoffKalast/vizanti/assets/9977799/17abbe77-286b-4e06-8309-5af6ded6e20d" width="30"/> Waypoint Mission

**Message types:** `nav_msgs/Path`, `geometry_msgs/PoseArray`

Create missions with multiple waypoints, then send them as a Path or PoseArray message. Single tap to add a point, single tap to remove an existing one, hold and drag to move points. Adding a point on an existing line will add it between those two points. Long press to open setup menu.

See the in-depth guide: [Waypoint Missions](waypoints.md).

## <img src="https://github.com/MoffKalast/vizanti/assets/9977799/f641c452-fea9-4800-8078-7d59baf0cda3" width="30"/> Area Mission

**Message type:** `geometry_msgs/PolygonStamped`

Drag to select an area and publish it to a PolygonStamped topic. Since the area is a rectangle, the first polygon vertex will be at the cursor press, and the third vertex will be the press released point. Long press to open setup menu.

## <img src="https://github.com/MoffKalast/vizanti/assets/9977799/344c340d-4735-4de8-a98e-332e5e27b600" width="30"/> Button

**Message types:** `std_msgs/Bool`, `std_msgs/Empty`

A button with customizable text that displays the last message sent on a Bool topic and sends the inverse to toggle it when pressed. Also supports just sending messages to an Empty topic. Long press to open setup menu.

See the in-depth guide: [Button State Pattern](button.md).

## <img src="https://github.com/MoffKalast/vizanti/assets/9977799/134d15e4-4084-4dd5-8781-a93a92684e63" width="30"/> <img src="https://github.com/MoffKalast/vizanti/assets/9977799/80ba6f13-3154-4ad3-92a4-430275e533f0" width="30"/> Altimeter

**Message type:** `std_msgs/Float32`

A side indicator that renders the Z value of a TF frame as depth/altitude depending on mode. Clicking the altimeter will publish a metric value as a Float32 value to the selected topic, so it can be used for marking a target depth/altitude. A yellow indicator arrow will display the last valid value received on the target topic.
