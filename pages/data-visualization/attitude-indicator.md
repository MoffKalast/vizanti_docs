# <img src="assets/navball_icon.svg" width="34"/> Attitude Indicator

**Message types:** `tf2_msgs/TFMessage`, `sensor_msgs/Imu`

A three axis navball showing orientation from a TF link or an Imu message. Alongside the sphere it lists the raw quaternion, acceleration and gyro values for the selected source.

<video controls width="800"><source src="assets/video/attitude.mp4" type="video/mp4">  Your browser does not support the video tag.</video>



## Display modes

The mode dropdown changes how the orientation is mapped onto the ball. All three show the same data, they just differ in reference frame, so pick whichever matches how you think about the vehicle:

### Pilot (Inside-Out)

The classic aircraft artificial horizon, as if you were sitting in the vehicle looking out. The horizon moves opposite to the vehicle, i.e. pitch up and the horizon drops.

### Inertial Reference (Outside-In)

A floating sphere locked to the world frame. It's the Pilot view with pitch and yaw flipped, useful when you want the ball to read like an external world reference rather than a cockpit instrument.

### Observer (Direct Rotation)

The simplest mapping, the ball just rotates the same way the reported orientation does, as if you were holding the vehicle in your hand.

### Roll on indicator line

Instead of tilting the entire ball around a fixed horizon line, this applies roll to the horizon line. That's often more intuitive, especially when observing from a static reference frame.

## Orientation fallback / fusion

When the source is an Imu whose quaternion is valid, it's used directly. Many raw IMU drivers don't run a fusion filter and leave that field zeroed out, so as a fallback the widget estimates orientation itself from the accelerometer and gyroscope if those are all that's available:

- **Accel + gyro**: roll and pitch come from the gravity vector (accelerometer), yaw is integrated from the gyro, and the two are fused. This is the normal fallback.
- **Accel only**: if the gyro is unusable, roll and pitch still track from gravity, but there's no yaw reference.
- **Gyro only**: if the accelerometer is unusable, orientation is integrated from the gyro alone and will drift over time.

The status indicator reports which of these is active so it's obvious when you're looking at a real orientation versus an estimate. Note this is a lightweight helper for visualization, not a substitute for a proper onboard filter, it certainly comes in handy when developing IMU drivers.
