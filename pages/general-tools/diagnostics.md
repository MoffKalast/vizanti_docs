# <img src="assets/diagnostics_green.svg" width="34"/> Diagnostics

**Message type:** `diagnostic_msgs/DiagnosticsArray` `rosgraph_msgs/Log` `rcl_interfaces/Log`

Displays key-value diagnostic data in two modes, either from Log data (typically published as /rosout or /rosout_agg) or from DiagnosticArray messages.

Showing a DiagnosticsArray topic:

![array](assets/screenshots/diagnostics_array.jpg)

When displaying a diagnostic array, values are simply updated to reflect the latest.

----

Showing rosout with nav2:

![ros2](assets/screenshots/diagnostics_rosout2.jpg)

In log mode, a history of recent messages is shown, with indentical messages  grouped together.

## Icon indicator

The indicator changes based on max severity level of the currently set topic+filter setup: 

- <img src="assets/diagnostics_green.svg" width="30"/> All messages report OK
- <img src="assets/diagnostics_yellow.svg" width="30"/> Some message reports WARN
- <img src="assets/diagnostics_red.svg" width="30"/> Some message reports ERROR or FATAL
- <img src="assets/diagnostics.svg" width="30"/> No data yet
