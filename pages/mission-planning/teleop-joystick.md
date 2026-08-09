# <img src="assets/joystick.svg" width="34"/> Teleop Joystick

**Message types:** `geometry_msgs/Twist`, `geometry_msgs/TwistStamped`

Joystick for publishing Twist (or TwistStamped) commands. It can be positioned anywhere on the screen by scrolling to the preview box in the setup menu and dragging it, and each joystick direction can be mapped to any linear or angular axis.

<video controls width="800"><source src="assets/video/joystick.mp4" type="video/mp4">  Your browser does not support the video tag.</video>

## Presets

The **Apply preset** dropdown fills in the axis mapping plus sensible velocity, acceleration and helper toggles for a common vehicle type. It's a starting point, everything stays editable afterwards, and some presets also set a matching default keybind layout.

- **Diffdrive** → `linear.x` / `angular.z`, with Ackermann emulation on
- **Ackermann** → `linear.x` / `angular.z`
- **Holonomic** → `linear.x` / `linear.y`, IJKL keybinds
- **Altitude/Depth** → `linear.z`, space/shift keybinds
- **Pitch/Roll** → `angular.y` / `angular.x`, instant stop on
- **Pan/Tilt** → `angular.y` / `angular.z`, instant stop on

Two joysticks can be set up at the same time, e.g. one for XY motion, one for Z motion, but note that if you use both at once the subscriber will see Twist messages from both, with each demanding zero on the other's axes. Some kind of merger node that ignores zeros on specific axes for specific topics would be recommended on the backend in this special case if you want perfect responsiveness at all times.

## Extra toggles

**Ackermann emulation for diffdrive** (on by default) inverts the horizontal axis only while the vertical axis is negative, so reversing steers like a car instead of mirroring. This might get a bit wonky on the backwards-forwards transition but it still seems way more natural for some robots sometimes.

**Instant stop** skips deceleration and sends a zero twist the moment the stick is released, useful for pan/tilt and attitude control, or if the motor controller already handles that internally.

**Keyboard input** maps keys to the axes on top of the thumbstick (WASD by default). Click a bind button and press a key to remap it.

![Render](assets/screenshots/keybindings.jpg)