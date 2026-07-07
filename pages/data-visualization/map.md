# <img src="assets/map.svg" width="34"/> Map

**Message type:** `nav_msgs/OccupancyGrid`

Display an OccupancyGrid. The widget will autodetect topic with "costmap" in their names and switch them to costmap rendering mode.

It features the typical rviz render modes: Map, Costmap, Raw, as well as two extra Raw modes with black or white pixel transparency.

![Nav2 demo](assets/screenshots/occupancy_grid.jpg)


The raw+transparency mode has proven to be very useful for registering sonar imagery:

Sidescan:
![Render](assets/screenshots/sidescan.jpg)

FLS:
![Render](assets/screenshots/fls.jpg)