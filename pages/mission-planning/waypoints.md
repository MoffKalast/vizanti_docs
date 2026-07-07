# <img src="assets/waypoints.svg" width="34"/> Waypoint Mission

**Message types:** `nav_msgs/Path`, `geometry_msgs/PoseArray`

Create missions with multiple waypoints, then send them as a Path or PoseArray message. Single tap to add a point, single tap to remove an existing one, hold and drag to move points. Adding a point on an existing line will add it between those two points. Long press to open setup menu.

The Waypoints widget is simpler than it might first appear. It lets you pick a fixed frame and define points relative to it, which are then turned into a `nav_msgs/Path` or `geometry_msgs/PoseArray` and published to a receiver topic. A node on the ROS side then needs to process and forward that path to your navigation stack of choice.

On the ROS 2 side, there are two example nodes for Nav2 in [vizanti_demos](https://github.com/MoffKalast/vizanti/tree/ros2/vizanti_demos/scripts) that turn the Path into either a sequence of NavigateToPose calls or one NavigateThroughPoses. On the ROS 1 side, an example is the [line_planner](https://github.com/MoffKalast/line_planner) which subscribes to a Path directly.

![nav2 poses demo](assets/screenshots/nav2poses.gif)

## General behaviour

- <img src="assets/dropdown_start.svg" width="22"/> **Start** → sends the currently defined waypoints, the yaw rotation at each pointing towards the next one
- <img src="assets/dropdown_stop.svg" width="22"/> **Stop** → sends an empty array, which the nav side can interpret as a handy abort
- <img src="assets/dropdown_xy.svg" width="22"/> **Edit XY** → point defining mode relative to the selected fixed frame
- <img src="assets/dropdown_z.svg" width="22"/> **Edit Z** → edits the Z value of each point, useful for flying robots and submarines, by default all Z values are zero

## Params

- **Fixed frame:** The frame relative to which the points are defined, can be different from the global fixed frame so one can define points in a more global world frame if it exists.
- **Robot frame:** Only used for calculating the closest waypoint, see below.

## Start from closest waypoint?

Sometimes it comes in handy to send only a partial mission, such as when aborting and continuing if the backend isn't set up to handle that. When this option is enabled, the robot frame will be used to calculate the closest waypoint, and the mission will be truncated so it only continues from that point and to the end of the mission. The rest of the waypoints will be rendered as grayed out.

More info:

- https://github.com/MoffKalast/vizanti/issues/111
- https://github.com/MoffKalast/vizanti/pull/135


## Recreate a trajectory

There is a pattern that involves the Pose Tracker widget, that allows for capturing a robot's path, exporting and loading it as a waypoint mission:

1. Set up a tracker and capture a trajectory:

![posetracker_path](assets/screenshots/posetracker_path.jpg)

2. Export trajectory to CSV:

![posetracker_save](assets/screenshots/posetracker_save.jpg)

3. Load trajectory in Waypoints:

![waypoints_load](assets/screenshots/waypoints_load.jpg)

4. Refine or remove points:

![waypoints_path](assets/screenshots/waypoints_path.jpg)

5. ????

6. Profit.
