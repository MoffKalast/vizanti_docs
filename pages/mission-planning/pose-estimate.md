# <img src="assets/initialpose.svg" width="34"/> 2D Pose Estimate

**Message type:** `geometry_msgs/PoseWithCovarianceStamped`

> 👉 Long press to open the setup menu.

Publishes an initial pose on `/initialpose`, used to seed a localization stack (AMCL and similar). Click to place the position, drag to set the heading.

The standard localization bootstrap step, see the [Nav2 guide](https://docs.nav2.org/tutorials/docs/navigation2_on_real_turtlebot3.html) or [AMCL on the ROS 1](https://docs.trossenrobotics.com/agilex_limo_docs/demos/slam_nav/move_base.html) for how the estimate is consumed.
