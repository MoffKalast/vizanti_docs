# <img src="assets/battery_100.svg" width="34"/> Battery

**Message type:** `sensor_msgs/BatteryState`

Displays a BatteryState message. The icon fills in 20% steps and switches to a lightning-bolt variant when the message reports a charging status.

The setup menu shows every field the message carries: percentage, pack voltage, per-cell voltages, current draw, charge/capacity in Ah, plus the decoded power supply status, health and battery chemistry. Fields the driver doesn't populate are simply left blank. Hardcoded throttle to 500ms, cause frankly that should be more than enough for everyone.