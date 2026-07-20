# <img src="assets/rosbag.svg" width="34"/> Bag Recorder

Records selected topics by calling `rosbag record/ros2 bag record` as a subprocess on the server, exposed to the client through relay services.

The recorder is owned by the server node, so once started it keeps running even if the browser tab closes or the client drops off the network. That's the intended behaviour for missions that go out of wifi range: start the bag while connected, drive out autonomously on a waypoint mission, stop it or start a new one when it gets back into range.

The subprocess runs as a singleton, there is one recording process shared by everyone. All connected clients start and stop the same bag, and the widget re-syncs its start/stop button to the current state whenever the topic list refreshes. 

## Topic selection

Topics are grouped by type into collapsible sections. By default all topics get recorded, the client side stores the ones that were manually disabled, and if new ones appear they'll be set to record by default. This errs on the side of logging more data since it's easier to filter a bag later than make up lost data. But in any case it's wise to always check if anything changed before you start recording.

## File naming

The save path is a normal filesystem path on the server. The browser's local date and time is prepended to the filename as `YYYY-MM-DD-HH-MM`, so `~/recording.bag` becomes `~/2026-07-08-14-32-recording.bag`. The browser clock is used deliberately, since a robot that has been offline for a long stretch may have a badly drifted system clock, whereas the operator's device usually doesn't and is more likely to be accurate.