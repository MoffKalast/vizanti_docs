# <img src="assets/altimeter_green.svg" width="34"/> <img src="assets/altimeter.svg" width="34"/> Altimeter

**Message type:** `std_msgs/Float32`

A side indicator that renders the Z value of a TF frame as depth/altitude depending on mode. Clicking the altimeter will publish a metric value as a Float32 value to the selected topic, so it can be used for marking a target depth/altitude. A yellow indicator arrow will display the last valid value received on the target topic.

![Altimeter rendering](assets/screenshots/altimeter.jpg)