# Installation & Support

## New to ROS?

The installation instructions presume that one of the following is installed:

- [ROS Noetic](https://wiki.ros.org/noetic/Installation) on Ubuntu 20.04
- [ROS One](https://ros.packages.techfak.net/) on Ubuntu 22.04 or 24.04
- [ROS 2 Humble](https://docs.ros.org/en/humble/Installation.html) on Ubuntu 22.04
- [ROS 2 Jazzy](https://docs.ros.org/en/jazzy/Installation.html) on Ubuntu 24.04

You can find the setup instructions for Noetic/One [in the main branch readme](https://github.com/MoffKalast/vizanti/blob/ros1/ReadMe.md) and Humble/Jazzy on [the ros2 branch](https://github.com/MoffKalast/vizanti/blob/ros2/ReadMe.md).

## ROS distro support

| Setup                | Noetic (ROS 1) | One (ROS 1) | Humble (ROS 2) | Jazzy (ROS 2) |
|----------------------|----------------|-------------|----------------|---------------|
| Vizanti + Rosbridge  | 🟢             | 🟢          | 🟡             | 🟡            |
| Vizanti + RWS        | N/A            | N/A         | 🟢             | 🟢            |

🟢 stable, all features should work

🟡 lower message throughput, higher CPU usage

❓ untested

🟥 no support (yet)

## Browser compatibility guide

|             | Windows | Linux | MacOS | iOS | Android |
|-------------|---------|-------|-------|-----|---------|
| **Chrome**  | ✓       | ✓     | ❓    | N/A | ✓       |
| **Firefox** | ✓       | 🐢    | ❓    | N/A | 🐢      |
| **Safari**  | N/A     | N/A   | ✓     | ✓   | N/A     |

🐢 Slow rendering

❓ Untested

Vizanti should generally work with all browsers, and contains considerable hacky workarounds for e.g. Safari support on iOS without HTTPS.

In practice though, it's most often tested using Chrome on Android, Windows, and Ubuntu so those environments are likely to have fewer bugs and better performance.

> If you are seeing unusually slow rendering in Chrome on Linux, set "Force color profile" to "sRGB" in `chrome://flags/#force-color-profile`. This should speed up canvas rendering.
