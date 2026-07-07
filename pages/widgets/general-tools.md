# General Tools & Configuration

Aside from the required ones, custom widgets can be added to the navbar to customize functionality for a given robot and test setup.

> **Note:** Some icons open setup modals instantly, while others use a single press to trigger actions and use a long press to open the modal.

## <img src="https://github.com/MoffKalast/vizanti/assets/9977799/eca26a9c-22f6-46cf-8356-ae49ae821578" width="30"/> Global Settings

Set the background color and the fixed TF frame. Also has a button to reset the camera view to zero and default zoom. Widget configurations can be exported and imported here as well, see [Configuration](../configuration.md).

## <img src="https://github.com/user-attachments/assets/b480a38b-055a-4534-9227-31e3b1f72198" width="30"/> Rosbridge

Shows the backend connection status. Green if a rosbridge compatible server is connected, yellow if attempting to reconnect, red if the connection has been lost.

## <img src="https://github.com/user-attachments/assets/ec3d2c03-c3f4-42b2-988e-4223504b7976" width="30"/> Grid

The adjustable metric grid. Currently renders only in the fixed frame.

## <img src="https://github.com/MoffKalast/vizanti/assets/9977799/6179c90d-2077-42b2-a69a-2afd9891d0c6" width="30"/> TF

Renders TF frames, same options as in RViz for the most part.

## <img src="https://github.com/MoffKalast/vizanti/assets/9977799/593fd0a1-b204-431c-bb49-1c0514b72530" width="30"/> Robot Model

Renders a 2D sprite to represent the robot model or any specific TF link.

## <img src="https://github.com/MoffKalast/vizanti/assets/9977799/f71f1c6b-52a5-4a26-9362-f626b73ea778" width="30"/> Param Reconfigure

Adjust values of all nodes with reconfigurable parameters. Works through dynamic_reconfigure in Noetic, and standard node parameters in ROS 2.

## <img src="https://github.com/MoffKalast/vizanti/assets/9977799/728872a5-3d55-4bc8-91d1-5af34acf39f4" width="30"/> Bag Recorder

Records specified topics by calling `rosbag record` via proxy.

## <img src="https://github.com/MoffKalast/vizanti/assets/9977799/1b6bcef3-6443-4797-a69d-c6b039d4ea39" width="30"/> Node Manager

Launch nodes, kill nodes, see information about nodes and run other node debugging tools.

## <img src="https://github.com/user-attachments/assets/c77b26f1-4b98-44e3-93f8-0c0d9af50877" width="30"/> Topic Inspector

A raw text visualizer for topic data, and publisher/subscriber info analogous to `rostopic echo` and `rostopic info`.

## <img src="https://github.com/MoffKalast/vizanti/assets/9977799/4ce667aa-0c08-4e4d-861f-86c9015d15aa" width="30"/> Add New Visualizer/Widget

Self explanatory.
