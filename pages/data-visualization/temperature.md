# <img src="assets/temp_warm.svg" width="34"/> Temperature

**Message type:** `sensor_msgs/Temperature`

Displays a Temperature reading. The setup menu shows the value, its variance, and the TF frame it came from.

## High / Low thresholds

Two thresholds drive the indicator icon:

- above **High** (default 60 °C) → hot icon
- below **Low** (default 20 °C) → cold icon
- anything in between → warm icon

They're just display thresholds for at-a-glance status, set them to whatever "too hot" and "too cold" mean for the thing you're monitoring. The update rate is fixed at 500 ms.
