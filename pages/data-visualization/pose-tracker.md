# <img src="assets/odom.svg" width="34"/> Pose Tracker

**Message types:** `tf2_msgs/TFMessage`, `nav_msgs/Odometry`

An analogue to the Odometry widget in RViz that renders the history of a pose as a line with arrows, from an Odometry topic or any transform frame. The setup menu also shows the total travelled distance.

![Render](assets/screenshots/posetracker_path.jpg)

## Sampling

Two things gate how points get recorded:

- **Sample delay (ms)** — how often the current pose is polled.
- **Minimum distance** — a new point is only appended if it's moved more than 3 cm from the previous one, so a stationary robot doesn't pile up thousands of identical samples.

**History (N)** caps how many points are kept, the oldest are dropped once the limit is reached. **Draw path** and **Draw arrows** toggle the line and the heading arrows.

## Saving history

With **Save history** enabled (the default), the recorded track is persisted to the browser's IndexedDB and reloaded when the widget comes back, so it survives a page refresh. Like everything in IndexedDB and localStorage, this store is specific to the browser and host IP. Disable it and the history is kept only in memory and resets on reload. **Clear history** wipes both the in-memory track and the stored copy.

## Exporting a trajectory

**Download as CSV** exports the track as `x, y, yaw` rows. This is the first half of the recreate-a-trajectory workflow on the [Waypoint Mission](../mission-planning/waypoints.md) page, capture a path here, then load the CSV back in as a Waypoint Mission to replay or refine it.
