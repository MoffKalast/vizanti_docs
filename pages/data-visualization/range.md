# <img src="assets/range.svg" width="34"/> Range

**Message type:** `sensor_msgs/Range`

Draws an ultrasonic or IR rangefinder/echosounder on the main view. The setup menu shows the current range, the sensor's min/max, the field of view, and the radiation type. The measured return is drawn as a bright band at the reported distance inside the dimmer full min–max envelope.

## How it renders (and why it looks odd)

A Range message describes a 3D cone pointing down its frame's +X axis, but the view is a flat top-down projection, so the widget has to flatten that cone onto the ground plane. It does this by projecting the cone's axis and foreshortening the drawn ranges by how horizontal the sensor is:

- **Pointing roughly horizontal** → a normal pie-slice wedge, oriented by the sensor's yaw. As the sensor tilts away from horizontal the wedge foreshortens (shrinks along its axis), which is the geometrically sensible behaviour.
- **Pointing steeply up or down** → the widget gives up on the wedge and instead draws concentric rings centred on the sensor position, since a cone aimed along the viewing axis projects to a disc rather than a wedge. Kind of useless in retrospect, but better than rendering nothing when the above process fails. Could use a rework for genuine orthographic cone rendering, though it won't look any more informative in this situation.

If multiple rangefinders are aggregated to the same topic (the way a nav stack might usuallc consume them), then all of them should render fine at the same time, providing that they have different TF link headers. 

The field-of-view figure in the readout is the true message value; the on-screen angular width may be widened to compensate for foreshortening.

![Render](assets/screenshots/lidarsonar.jpg)