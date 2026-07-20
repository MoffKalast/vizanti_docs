# <img src="assets/map.svg" width="34"/> Map

**Message type:** `nav_msgs/OccupancyGrid`

Display an OccupancyGrid.

It features the typical rviz render modes: Map, Costmap, Raw, as well as two extra Raw modes with black or white pixel transparency. Autodetects topics with "costmap" in their name and switch them to costmap rendering mode automatically.

![Nav2 demo](assets/screenshots/occupancy_grid.jpg)

## Use Timestamp

Mirroring Rviz's solution to make sure maps don't lag behind when viewing other frames, the default rendering method is to use the latest available transform instead of the map's given timestamp. Enabling ""Use Timestamp" instead renders it the same way as pretty much all other message types are.

## Robot-relative grids and sonar imagery

For grids published continuously in a robot or sensor frame (sidescan/FLS sonar, local costmaps, sensor swaths), enabling timestamp rendering is must. With the timestamp on, each incoming grid stays pinned to where the robot actually was when it was captured, which is likely what you want when registering objects.

The raw+transparency mode has proven to be very useful for registering sonar imagery anyhow:

Sidescan (raw with black transparency):
![Render](assets/screenshots/sidescan.jpg)

FLS (raw with black transparency):
<video controls width="800"><source src="assets/video/fish.mp4" type="video/mp4">  Your browser does not support the video tag.</video>

FLS (raw):
![Render](assets/screenshots/oculus3.jpg)