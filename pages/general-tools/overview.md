# General Tools

Aside from the required ones, custom widgets can be added to the navbar to customize functionality for a given robot and test setup.

> **Note:** Some icons open setup modals instantly, while others use a single press to trigger actions and use a long press to open the modal.

| | Widget | Message Type | Summary |
|---|--------|--------------|---------|
| <img src="assets/settings.svg" width="30"/> | [Global Settings](global-settings.md) | — | Set the background color and the fixed TF frame. Also has a button to reset the camera view to zero and default zoom. |
| <img src="assets/rosbridge_connected.svg" width="30"/> | [Rosbridge](rosbridge.md) | — | Shows the backend connection status. Green if a rosbridge compatible server is connected, yellow if attempting to reconnect, red if the connection has been lost. |
| <img src="assets/grid.svg" width="30"/> | [Grid](grid.md) | — | The adjustable metric grid. Currently renders only in the fixed frame. |
| <img src="assets/tf.svg" width="30"/> | [TF](tf.md) | — | Renders TF frames, same options as in RViz for the most part. |
| <img src="assets/robotmodel.svg" width="30"/> | [Robot Model](robot-model.md) | — | Renders a 2D sprite to represent the robot model or any specific TF link. |
| <img src="assets/reconfigure.svg" width="30"/> | [Param Reconfigure](param-reconfigure.md) | — | Adjust values of all nodes with reconfigurable parameters. Works through dynamic_reconfigure in Noetic, and standard node parameters in ROS 2. |
| <img src="assets/rosbag.svg" width="30"/> | [Bag Recorder](bag-recorder.md) | — | Records specified topics by calling `rosbag record` via proxy. |
| <img src="assets/nodemgr.svg" width="30"/> | [Node Manager](node-manager.md) | — | Launch nodes, kill nodes, see information about nodes and run other node debugging tools. |
| <img src="assets/inspector.svg" width="30"/> | [Topic Inspector](topic-inspector.md) | — | A raw text visualizer for topic data, and publisher/subscriber info analogous to `rostopic echo` and `rostopic info`. |
| <img src="assets/add.svg" width="30"/> | [Add New Visualizer/Widget](add-widget.md) | — | Self explanatory. |
