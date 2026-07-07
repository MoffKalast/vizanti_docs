# Getting Started

## Prerequisites

The installation instructions presume that one of the following is installed:

- [ROS Noetic](https://wiki.ros.org/noetic/Installation) on Ubuntu 20.04
- [ROS One](https://ros.packages.techfak.net/) on Ubuntu 22.04 or 24.04
- [ROS 2 Humble](https://docs.ros.org/en/humble/Installation.html) on Ubuntu 22.04
- [ROS 2 Jazzy](https://docs.ros.org/en/jazzy/Installation.html) on Ubuntu 24.04

## Installation

For ROS 1 (Noetic/One), see the setup instructions [in the main branch readme](https://github.com/MoffKalast/vizanti/blob/ros1/ReadMe.md).

For ROS 2 (Humble/Jazzy):

```bash
cd ~/colcon_ws/src
git clone -b ros2 https://github.com/MoffKalast/vizanti.git

cd ..
rosdep install -i --from-path src/vizanti -y
colcon build
```

### Docker

Alternatively, you can also containerize Vizanti. For that you need to [install Docker](https://docs.docker.com/engine/install/ubuntu/) and build the container.

In case you're building on a system with a different version of ROS or it's not installed, replace `$ROS_DISTRO` with either humble or jazzy:

```bash
git clone -b ros2 https://github.com/MoffKalast/vizanti.git
cd vizanti
docker build -f docker/Dockerfile -t vizanti:2.0 . --build-arg ROS_VERSION=$ROS_DISTRO
```

## Running

```bash
ros2 launch vizanti_server vizanti_server.launch.py
```

Or with Docker (set env vars directly if they need to be different):

```bash
docker run --rm -it --net=host --name vizanti-ros2 -e ROS_DOMAIN_ID=$ROS_DOMAIN_ID -e RMW_IMPLEMENTATION=$RMW_IMPLEMENTATION -e USE_RWS=false -v /dev/shm:/dev/shm vizanti:2.0
```

The web app can be accessed at `http://<host_ip>:5000`. Client settings are automatically saved in localStorage. The satellite imagery renderer also uses the indexedDB to store tiles for offline use (note that this is IP specific). By default the rosbridge instance also occupies port 5001.

> If you're using a mobile device connected to a robot's hotspot that doesn't have internet access and can't load the page, turn off mobile data. This will prevent the browser from sending packets to the wrong gateway.

## Recommended — RWS Backend

With rosbridge being a Tornado python based package and rclpy being overly CPU heavy, this cpp drop-in replacement server should result in a ~5x lower overhead and faster response times. It works with CycloneDDS out of the box, and for FastDDS it requires the `rmw_fastrtps_dynamic_cpp` version which includes interface introspection.

```bash
cd ~/colcon_ws/src
git clone -b $ROS_DISTRO https://github.com/v-kiniv/rws.git

cd ..
rosdep install -i --from-path src/rws -y
colcon build
```

If using FastDDS:

```bash
sudo apt install ros-$ROS_DISTRO-rmw-fastrtps-dynamic-cpp
export RMW_IMPLEMENTATION=rmw_fastrtps_dynamic_cpp
```

Then run the RWS launch instead:

```bash
ros2 launch vizanti_server vizanti_rws.launch.py
```

Or with Docker:

```bash
docker run --rm -it --net=host --name vizanti-ros2 -e ROS_DOMAIN_ID=$ROS_DOMAIN_ID -e RMW_IMPLEMENTATION=$RMW_IMPLEMENTATION -e USE_RWS=true -v /dev/shm:/dev/shm vizanti:2.0
```

## First steps in the client

Once the backend is launched, navigating to `http://<host_ip>:5000` in your browser should display the web app client.

> 👉 Most widget icons open setup menus with a click, but some require a **long press** to open the menu and a single click to trigger actions.

Clicking the <img src="assets/add.svg" alt="add widget" width="25"/> button lets you add widgets to display and send data to ROS topics. Check the [Feature List](feature-list.md) for a rundown of everything available, most are implementations of familiar visualizers seen in RViz. See the [Tips & FAQ](faq.md) for common usage and setup questions.

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
