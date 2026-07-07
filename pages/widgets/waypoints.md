# <img src="https://github.com/user-attachments/assets/5a816dfc-a051-410d-aa3e-a87b0c3c0194" width="34"/> Waypoint Missions

The Waypoints widget is simpler than it might first appear. It lets you pick a fixed frame and define points relative to it, which are then turned into a `nav_msgs/Path` or `geometry_msgs/PoseArray` and published to a receiver topic. A node on the ROS side then needs to process and forward that path to your navigation stack of choice.

On the ROS 2 side, there are two example nodes for Nav2 in [vizanti_demos](https://github.com/MoffKalast/vizanti/tree/ros2/vizanti_demos/scripts) that turn the Path into either a sequence of NavigateToPose calls or one NavigateThroughPoses. On the ROS 1 side, an example is the [line_planner](https://github.com/MoffKalast/line_planner) which subscribes to a Path directly.

## General behaviour

- **Start** → sends the currently defined waypoints, the yaw rotation at each pointing towards the next one
- **Stop** → sends an empty array, which the nav side can interpret as a handy abort
- **Edit XY** → point defining mode relative to the selected fixed frame
- **Edit Z** → edits the Z value of each point, useful for flying robots and submarines, by default all Z values are zero

## Params

- **Fixed frame:** The frame relative to which the points are defined, can be different from the global fixed frame so one can define points in a more global world frame if it exists.
- **Robot frame:** Only used for calculating the closest waypoint, see below.

## Start from closest waypoint?

Sometimes it comes in handy to send only a partial mission, such as when aborting and continuing if the backend isn't set up to handle that. When this option is enabled, the robot frame will be used to calculate the closest waypoint, and the mission will be truncated so it only continues from that point and to the end of the mission. The rest of the waypoints will be rendered as grayed out.

More info:

- https://github.com/MoffKalast/vizanti/issues/111
- https://github.com/MoffKalast/vizanti/pull/135
