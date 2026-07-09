# Tips & Frequently Asked Questions

## How to open menu/settings windows on some widgets?

Most widget icons open their setup menus with a click, but some require a long press to open the menu since they already use the single click to trigger actions. This includes the 2D Pose Estimate, 2D Nav Goal, Area Mission, and Button widgets.

## The web client doesn't load on other machines, but works on localhost?

Make sure the browser didn't autocorrect your URL to `https://` instead of `http://` which won't get a response from the static serve in its default configuration. If that doesn't help, check if ufw is disabled on the host machine or the network isn't blocking port 5000 and 5001 from it through some other means. If you're using a mobile device connected to a robot's hotspot that doesn't have internet access, make sure to turn off mobile data. That should prevent any routing confusion.

## <img src="assets/tf.svg" width="26"/> Changing the fixed frame

Check the Global Settings widget and select any of the currently known TF frames in the dropdown.

## Will reloading the browser tab discard any changes?

Any widgets you add and settings you modify should immediately save into localStorage, so you can F5 reload the page at any time if needed. If the rosbridge heartbeat drops out (e.g. due to unstable wifi) then the page will also automatically reload to reconnect all subscribers.

## Changing ports or the default widget config?

See the [Configuration](configuration.md) page.

## How to use the satellite tile renderer?

See the dedicated [Satellite Tiles](data-visualization/satellite-tiles.md) page.

## How to send waypoint missions?

See the dedicated [Waypoint Missions](mission-planning/waypoints.md) page.

## How does the Button state pattern work?

See the dedicated [Button](mission-planning/button.md) page.
