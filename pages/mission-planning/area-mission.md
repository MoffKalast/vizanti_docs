# <img src="assets/area.svg" width="34"/> Bounding Box

**Message type:** `geometry_msgs/PolygonStamped`

Tap/click and drag to select an axis-alligned bounding box in the fixed frame by dragging, and publish it immediately to a geometry_msgs/PolygonStamped topic.

Since the area is a rectangle, the first polygon vertex will be at the cursor press, and the third vertex will be the press released point. Long press to open setup menu.

<video controls width="800"><source src="assets/video/polygon.mp4" type="video/mp4">  Your browser does not support the video tag.</video>
