# Configuration

## Changing the port numbers

By default Vizanti serves static content on port 5000 and sets up Rosbridge/RWS on 5001. This can be changed in the launch files:

For ROS 1:
```xml
<arg name="port" default="5000" />
<arg name="port_rosbridge" default="5001" />
```

And ROS 2:
```python
port = launch.substitutions.LaunchConfiguration('port', default=5000)
port_rosbridge = launch.substitutions.LaunchConfiguration('port_rosbridge', default=5001)
```

## Adding a default config

Since the widget config is kept in localStorage, it means it's specific for both the browser and the host IP. If either of those changes, the setup needs to be redone. But there are some shortcuts.

![export/import config](https://github.com/MoffKalast/vizanti/assets/9977799/4d68bf9d-dc42-4195-8451-9a8c0140bf5d)

Exporting the config yields a .json file that can be imported in other browsers. Or it can also replace the default globally for all newly connected browser clients by specifying its path in the launch file:

For ROS 1:
```xml
<arg name="default_widget_config" default="~/your_custom_config.json" />
```

And ROS 2:
```python
default_widget_config = launch.substitutions.LaunchConfiguration('default_widget_config', default='~/your_custom_config.json')
```

## Multiple concurrent configs

[Here is a short discussion](https://github.com/MoffKalast/vizanti/discussions/69) on how to duplicate the static serve flask node in order to have two concurrent layout save files on separate ports. A more scalable alternative is to export and import configs (in Global Settings) when they're needed.
