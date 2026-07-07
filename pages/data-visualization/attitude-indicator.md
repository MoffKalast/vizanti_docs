# <img src="assets/navball_icon.svg" width="34"/> Attitude Indicator

**Message types:** `tf2_msgs/TFMessage`, `sensor_msgs/Imu`

A three axis navball for showing orientation from TF links and Imu messages. Shows the quaternion if given, otherwise fuses accelerometer and gyro data with a basic complementary filter.

<video controls width="800"><source src="assets/video/attitude.mp4" type="video/mp4">  Your browser does not support the video tag.</video>
