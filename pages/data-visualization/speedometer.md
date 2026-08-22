# <img src="assets/speedometer_icon.svg" width="34"/> Speedometer

**Message type:** `tf2_msgs/TFMessage`

An indicator that tracks the relative speed of any two TF links and can display the value in various units:
- Meters per second (m/s)
- Kilometers per hour (km/h)
- Knots / NM per hour (kts)
- Miles per hour (mph)
- Feet per second (ft/s)
- Bananas per second (b/s)

A standard banana is assumed to be 152.4 milimeters long.

<video controls width="800"><source src="assets/video/speedo.mp4" type="video/mp4">  Your browser does not support the video tag.</video>

The dial indicates the current speed from zero to the max seen velocity, so initially the dial will top out until the actual vehicle max speed is observed.
