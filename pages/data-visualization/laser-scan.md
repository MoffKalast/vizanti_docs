# <img src="assets/scan.svg" width="34"/> Laser Scan

**Message type:** `sensor_msgs/LaserScan`

Draws a LaserScan on the main view. The setup menu reports the current point count.

LaserScan is a high-bandwidth topic that can easily congest the shared socket, so the default throttle is very high. Drop it to 100 ms or even lower for a live scan once you know your link can take it. How low you can go depends mostly on scan density and frequency of your particular lidar and the available network bandwidth. See the [Tips & FAQ](../faq.md) for the general bandwidth guidance.

![Render](assets/screenshots/lidarsonar.jpg)