# <img src="assets/temp_warm.svg" width="34"/> Temperature

**Message type:** `sensor_msgs/Temperature`

Displays a Temperature reading. The setup menu shows the value, its variance, and the TF frame it came from.

## High / Low thresholds

The indicator icon changes to reflect the received value based on defined thresholds: 

- <img src="assets/temp_hot.svg" width="30"/> above High value (default 60 °C)
- <img src="assets/temp_cold.svg" width="30"/> below Low value (default 20 °C)
- <img src="assets/temp_warm.svg" width="30"/> anything in between
- <img src="assets/temp_unknown.svg" width="30"/> no message received yet

The update rate is fixed at 500 ms.
