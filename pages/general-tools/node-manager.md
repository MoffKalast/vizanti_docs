# <img src="assets/nodemgr.svg" width="34"/> Node Manager

Launch and kill nodes, inspect running ones, and run node level diagnostics, all through relay services on the ROS side. It's roughly a `run`/`launch` + `node` GUI.

## Launching nodes

Pick a run type or start typing a package name into the autocomplete, then pick an executable or launch file. Selecting something with "launch" in the name switches the type to launch automatically. Execute runs it after a confirmation.

Executable detection is best-effort, so not every file is guaranteed to show up, and occasionally too many will (especially under ROS 2).

## Managing nodes

Every discovered node is listed and refreshed by polling, nodes with `vizanti` in their name are excluded to prevent accidental suicide. Click one to open its context view:

- **Node info** — publishers, subscribers, services.
- **Lifecycle status** — the current state for managed lifecycle nodes, ROS 2 only.
- **Kill node** — terminates the node after a confirmation. Uses rosnode kill under ROS 1, and some pkill shenanigans under ROS 2 that try to locate the right process based on its name since there's no standard counterpart. If a node is configured to respawn it will keep coming back and there is no escape.

## Diagnostics

Runs a full node graph diagnostic and shows the report in a popup. This is `ros2 doctor --report`/`roswtf`, handy for tracking down missing connections or misconfigured nodes without an SSH session. Questionable usefulness in practice tbh.
