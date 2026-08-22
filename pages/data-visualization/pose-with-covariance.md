# <img src="assets/posewithcovariancestamped.svg" width="34"/> Pose with Covariance

**Message type:** `geometry_msgs/PoseWithCovarianceStamped`

Renders a single pose together with its uncertainty. Typical sources are an AMCL best-estimate pose (`/amcl_pose`), or a GNSS pose.

## Render modes

- **Long Arrow**: position plus a heading arrow
- **Axes**: an XYZ axis marker at the pose