# Vizanti <img src="assets/icon/icon.svg" width="42"/> 

## Web Visualizer & Mission Planner for ROS

![Vizanti preview](assets/screenshots/preview.jpg)

Vizanti is a web-based ground control station providing visualization and control any ROS or ROS 2 enabled robot. 

It replicates RViz's orthographic 2D view in a familiar way with a smartphone friendly interface, and extends it with satelite imagery, mission planning, joystick+keyboard teleoperation, node management and parameter reconfigure.

The project is open-source source and BSD licensed, so feel free to contribute and modify it for your use case.

![Vizanti preview](assets/screenshots/nav2_pc2_jag.jpg)

Initially designed as a field tool for marine robotics, Vizanti is equipped to operate with or without internet access, and as such the most practical way is often to host it on the robot itself and connect mobile or desktop devices to it over wifi, no DDS or ros_comm linking required.

- **[Getting Started](getting-started.md)** — installation and first steps
- **[Feature List](feature-list.md)** — every widget at a glance
- **[Tips & FAQ](faq.md)** — common usage and setup questions

![Vizanti preview](assets/screenshots/asv_ui_demo.jpg)

## Demo Videos

List of instructional and not so instructional videos that showcase features and general usage:

| Video | Description |
| ----- | ----------- |
| [![ASV Demo](https://img.youtube.com/vi/aq4oYjbOlOM/0.jpg)](https://www.youtube.com/watch?v=aq4oYjbOlOM) | USV Bag review: sonar, lidar, GNSS, camera (Chrome, Linux) |
| [![Slam Demo](https://img.youtube.com/vi/IM6ix1stPnc/0.jpg)](https://www.youtube.com/watch?v=IM6ix1stPnc) | Gazebo lidar SLAM demo, node management (Chrome, Windows) |
| [![Pond Test](https://img.youtube.com/vi/uXDBWc23ZdQ/0.jpg)](https://www.youtube.com/watch?v=uXDBWc23ZdQ) | GNSS navigation demo (Chrome PWA, Android) using [Tuna](https://github.com/MoffKalast/tuna) |
| [![Pond Nav](https://img.youtube.com/vi/NZO6q_YMRwI/0.jpg)](https://youtu.be/NZO6q_YMRwI?feature=shared&t=91) | GNSS survey pattern test (Chrome PWA, Android) |
| [![Long range Nav](https://img.youtube.com/vi/V_BqTKp-Z5E/0.jpg)](https://youtu.be/V_BqTKp-Z5E?feature=shared&t=1286) | GNSS sonar sensors (Chrome PWA, Android), long range nav bag review (Chrome, Windows) |