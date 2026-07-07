# Getting Started

## Prerequisites

The installation instructions presume that one of the following is installed:

- [ROS Noetic](https://wiki.ros.org/noetic/Installation) on Ubuntu 20.04
- [ROS One](https://ros.packages.techfak.net/) on Ubuntu 22.04 or 24.04
- [ROS 2 Humble](https://docs.ros.org/en/humble/Installation.html) on Ubuntu 22.04
- [ROS 2 Jazzy](https://docs.ros.org/en/jazzy/Installation.html) on Ubuntu 24.04

## Installation

For ROS Noetic or ROS One, see [the setup instructions in the ros1 branch readme](https://github.com/MoffKalast/vizanti/blob/ros1/ReadMe.md).

For ROS 2 (Humble/Jazzy), follow [the readme instructions in the ros2 branch](https://github.com/MoffKalast/vizanti/blob/ros2/ReadMe.md).

Once the server is launched, navigating to `http://<host_ip>:5000` in your browser should display the web app client.

> 👉 Most widget icons open setup menus with a click, but some require a **long press** to open the menu and a single click to trigger actions.

To add a widget, click the <img src="assets/add.svg" alt="add widget" width="25"/> button, which presents a list of all widget types, and the list of all discovered ROS topics with compatible types. 

Check the [Feature List](feature-list.md) for a rundown of everything available, most are implementations of familiar visualizers seen in RViz.

See the [Tips & FAQ](faq.md) for common usage and setup questions.

## ROS distro support

| Setup                | Noetic (ROS&nbsp;1) | One (ROS&nbsp;1) | Humble (ROS&nbsp;2) | Jazzy (ROS&nbsp;2) | Lyrical (ROS&nbsp;2) |
|----------------------|----------------|-------------|----------------|---------------|---------------|
| Vizanti + Rosbridge  | 🟢             | 🟢          | 🟡             | 🟡            | ❓             |
| Vizanti + RWS        | N/A            | N/A         | 🟢             | 🟢            | ❓             |

🟢 stable, all features should work

🟡 lower message throughput, higher CPU usage

❓  untested

🟥 no support (yet)

## Browser compatibility guide

|             | Windows | Linux | MacOS | iOS | Android |
|-------------|---------|-------|-------|-----|---------|
| **Chrome**  | ✓       | ✓     | ❓    | N/A | ✓       |
| **Firefox** | ✓       | 🐢    | ❓    | N/A | 🐢      |
| **Safari**  | N/A     | N/A   | ✓     | ✓   | N/A     |

🐢 Slow rendering

❓ not well tested

Vizanti should generally work with all browsers, and contains considerable hacky workarounds for e.g. Safari support on iOS without HTTPS.

In practice though, it's most often tested using Chrome on Android, Windows, and Ubuntu so those environments are likely to have fewer bugs and better performance.

> If you are seeing unusually slow rendering in Chrome on Linux, set "Force color profile" to "sRGB" in `chrome://flags/#force-color-profile`. This should speed up canvas rendering.
