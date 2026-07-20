# <img src="assets/posearray.svg" width="34"/> Pose Array

**Message types:** `geometry_msgs/PoseArray`, `nav2_msgs/ParticleCloud`

Draws a flock of arrows, one per pose. Often used to display a [particle filter](https://en.wikipedia.org/wiki/Particle_filter).

AMCL publishes its particles as a `geometry_msgs/PoseArray` on `/particlecloud` (ROS 1), while Nav2's AMCL uses `nav2_msgs/ParticleCloud` on `/particle_cloud` which adds probabilities but since those are usually uniform it's not used for rendering at the moment. See the [Nav2 docs](https://docs.nav2.org/) or the [AMCL wiki page](https://wiki.ros.org/amcl) for what the cloud represents.