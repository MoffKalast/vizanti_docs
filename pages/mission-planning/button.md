# <img src="assets/button.svg" width="34"/> Button

**Message types:** `std_msgs/Bool`, `std_msgs/Empty`

A button with customizable text that displays the last message sent on a Bool topic and sends the inverse to toggle it when pressed. Also supports just sending messages to an Empty topic. Long press to open setup menu.

![Render](assets/screenshots/button.jpg)

## The Bool state pattern

There is a nifty programming pattern that lets you utilize a single `std_msgs/Bool` topic for both robust state indication and state change when using the Button widget.

Here are some direct rospy and rclpy examples:

```python
# ROS 1 rospy
self.enabled = False
self.enabled_sub = rospy.Subscriber("/enabled", Bool, self.enabled_callback)
self.enabled_pub = rospy.Publisher("/enabled", Bool, queue_size=1, latch=True)
self.enabled_pub.publish(self.enabled)

def enabled_callback(self, msg: Bool):
	if msg.data != self.enabled:
		self.enabled = msg.data
		self.enabled_pub.publish(self.enabled)
```

```python
# ROS 2 rclpy
self.enabled = False
self.enabled_sub = self.create_subscription(Bool, '/enabled', self.enabled_callback, 10)

qos_profile = QoSProfile(depth=1)
qos_profile.durability = QoSDurabilityPolicy.TRANSIENT_LOCAL
self.enabled_pub = self.create_publisher(Bool, '/enabled', qos_profile)
self.enabled_pub.publish(Bool(data=self.enabled))

def enabled_callback(self, msg: Bool):
	if msg.data != self.enabled:
		self.enabled = msg.data
		self.enabled_pub.publish(Bool(data=self.enabled))
```

What this does is:

1. Creates a latched publisher that always has the current Bool state available for any connecting subscribers, such as a newly connecting or reconnecting web client
2. Subscribes to any changes to it.
3. Changes its state and publishes the new latched state.
4. Avoids infinite recursion by only publishing when there's an actual delta to its current state.

Since the Button widget inverts the last received state and sends it, this can very practically toggle the current state of a boolean inside a node. Since web publishers can disconnect at any point and rosbridge isn't any good at latching either, this assures that the topic state is always correct.
