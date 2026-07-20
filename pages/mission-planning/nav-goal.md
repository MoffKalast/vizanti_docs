# <img src="assets/simplegoal.svg" width="34"/> 2D Nav Goal

**Message type:** `geometry_msgs/PoseStamped`

> 👉 Long press to open the setup menu.

Publishes a single goal pose. Click to place the position, drag to set the heading.

Typically used with `/move_base_simple/goal` or `/goal_pose`. Both move_base and Nav2 subscribe to this topic out of the box, so this behaves the same as sending a goal from RViz. See the [Nav2 guide](https://docs.nav2.org/tutorials/docs/navigation2_on_real_turtlebot3.html) for more info on the general concept. For multi-point missions see the [Waypoint Mission](waypoints.md).
