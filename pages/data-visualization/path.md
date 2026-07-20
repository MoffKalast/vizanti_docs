# <img src="assets/path.svg" width="34"/> Path

**Message type:** `nav_msgs/Path`

Draws a Path as a connected line on the main view, the standard way to see what a planner intends to do: global plans, local plans, recorded routes, or any other `nav_msgs/Path` a node emits. Add one widget per plan topic and give each its own colour to compare, for example, the global route against the local controller's rollout.