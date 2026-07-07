# <img src="assets/icon/icon.svg" width="42"/> Vizanti — Web Visualizer & Mission Planner for ROS

Vizanti is a web-based visualization and control tool developed for more convenient operation of outdoor robots running the Robot Operating System (ROS). The application attempts to replicate RViz's orthographic 2D view as closely as possible with a smartphone friendly interface. The second goal is to allow planning and executing movement and mission commands, i.e. goals and waypoints, with custom buttons and parameter reconfigure.

![Vizanti preview](assets/icon/preview.jpg)

As a field tool, Vizanti is designed to operate just as well without internet access, and as such the intended way is to host it on a robot, with rosbridge autoconnecting to the host IP.

- **[Getting Started](getting-started.md)** — installation and first steps
- **[Feature List](feature-list.md)** — every widget at a glance
- **[Tips & FAQ](faq.md)** — common usage and setup questions

## Demo Videos

List of instructional and not so instructional videos that showcase features and general usage:

| Video | Description |
| ----- | ----------- |
| [![Slam Demo](https://img.youtube.com/vi/IM6ix1stPnc/0.jpg)](https://www.youtube.com/watch?v=IM6ix1stPnc) | Gazebo lidar SLAM demo, node management (Chrome, Windows) |
| [![Pond Test](https://img.youtube.com/vi/uXDBWc23ZdQ/0.jpg)](https://www.youtube.com/watch?v=uXDBWc23ZdQ) | GNSS navigation demo (Chrome PWA, Android) using [Tuna](https://github.com/MoffKalast/tuna) |
| [![Pond Nav](https://img.youtube.com/vi/NZO6q_YMRwI/0.jpg)](https://youtu.be/NZO6q_YMRwI?feature=shared&t=91) | GNSS survey pattern test (Chrome PWA, Android) |
| [![Long range Nav](https://img.youtube.com/vi/V_BqTKp-Z5E/0.jpg)](https://youtu.be/V_BqTKp-Z5E?feature=shared&t=1286) | GNSS sonar sensors (Chrome PWA, Android), long range nav bag review (Chrome, Windows) |

Nav2 Navigate through poses, using [path_to_nav2poses.py](https://github.com/MoffKalast/vizanti/blob/ros2/vizanti_demos/scripts/path_to_nav2poses.py):

![nav2 poses demo](https://github.com/MoffKalast/vizanti/assets/9977799/f714dfc7-00ee-4580-bc05-b18d0117c496)
