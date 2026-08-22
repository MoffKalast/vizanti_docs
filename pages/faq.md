# Tips & Frequently Asked Questions

## How to open menu/settings windows on some widgets?

Most widget icons open their setup menus with a click, but some require a long press to open the menu since they already use the single click to trigger actions. This includes the 2D Pose Estimate, 2D Nav Goal, Area Mission, and Button widgets.

## The web client doesn't load on other machines, but works on localhost?

Make sure the browser didn't autocorrect your URL to `https://` instead of `http://` which won't get a response from the static serve in its default configuration. If that doesn't help, check if ufw is disabled on the host machine or the network isn't blocking port 5000 and 5001 from it through some other means. If you're using a mobile device connected to a robot's hotspot that doesn't have internet access, make sure to turn off mobile data. That should prevent any routing confusion.

## On lag/stuttering

High bandwidth topics (point clouds, laser scans, images, occupancy grids) are sent over a single rosbridge socket, so one greedy subscriber can congest the link and starve every other widget. Each of these widgets has a **Socket throttle (ms)** field in its setup menu that caps how often it receives new data. Higher values mean less bandwidth usabe but lower update rates and vice versa.

Rough guidance, tune to your setup:

- **Localhost / on the robot** - Throttle can be 0, most everything can stream at full rate, since loopback is relatively instant. Some visualizers might choke on processing though.
- **Gigabit ethernet** - Similar to localhost in most cases.
- **Decent Wifi** - Some throttling is generally recommended for a stable link, depends on what you're sending over. Most widget throttle defaults assume this level of thrughput plus a lot of other widgets, so feel free to decrease the delays if you need faster updates.
- **Bad/long range Wifi** - As bandwidth keeps dropping lower, most of the above mentioned visualizers will each occupy the connection for a decent while with a single message.

The defaults are deliberately conservative so a fresh setup stays responsive before you know your link budget. If you're replaying a bag at a high rate, e.g. 10x speed, then having a small socket throttle can prevent absurd amounts of messages from being sent, e.g. 16ms for a max 60 Hz refresh.

## <img src="assets/tf.svg" width="26"/> Changing the fixed frame

Check the Global Settings widget and select any of the currently known TF frames in the dropdown.

## Will reloading the browser tab discard any changes?

Any widgets you add and settings you modify should immediately save into localStorage, so you can F5 reload the page at any time if needed. If the rosbridge heartbeat drops out (e.g. due to unstable wifi) then the page will also automatically reload to reconnect all subscribers.

## Why did my layout reset after changing the robot's IP?

The widget config lives in the browser's localStorage, keyed by both the browser and the host IP. Connect from a different browser, or to the same robot on a different IP, and you start from the default layout. The satellite tile cache in IndexedDB is IP specific in the same way. To carry a setup across browsers or IPs, export the config in Global Settings and import it on the other side, or ship a default config from the launch file (see [Configuration](configuration.md)).

## Changing ports or the default widgets?

See the [Configuration](configuration.md) page.

## How to use the satellite tiles?

See the dedicated [Satellite Tiles](data-visualization/satellite-tiles.md) page.

## How to send waypoint missions?

See the dedicated [Waypoint Missions](mission-planning/waypoints.md) page.

## How does the Button work?

See the dedicated [Button](mission-planning/button.md) page.
