// Sidebar structure. To add a page: create pages/<id>.md and add an entry here.
const NAV = [
	{
		group: "/overview",
		pages: [
			{ id: "getting-started", title: "Getting Started" },
			{ id: "configuration", title: "Configuration" },
			{ id: "faq", title: "Tips & FAQ" },
			{ id: "feature-list", title: "Feature List" }
		]
	},
	{
		group: "/general_tools",
		pages: [
			{ id: "general-tools/global-settings", title: "Global Settings", icon: "settings.svg" },
			{ id: "general-tools/rosbridge", title: "Rosbridge", icon: "rosbridge_connected.svg" },
			{ id: "general-tools/grid", title: "Grid", icon: "grid.svg" },
			{ id: "general-tools/tf", title: "TF", icon: "tf.svg" },
			{ id: "general-tools/robot-model", title: "Robot Model", icon: "robotmodel.svg" },
			{ id: "general-tools/param-reconfigure", title: "Param Reconfigure", icon: "reconfigure.svg" },
			{ id: "general-tools/bag-recorder", title: "Bag Recorder", icon: "rosbag.svg" },
			{ id: "general-tools/node-manager", title: "Node Manager", icon: "nodemgr.svg" },
			{ id: "general-tools/topic-inspector", title: "Topic Inspector", icon: "inspector.svg" },
			{ id: "general-tools/folder", title: "Folder", icon: "folder.svg" },
			{ id: "general-tools/add-widget", title: "Add Widget", icon: "add.svg" }
		]
	},
	{
		group: "/mission_planning",
		pages: [
			{ id: "mission-planning/teleop-joystick", title: "Teleop Joystick", icon: "joystick.svg" },
			{ id: "mission-planning/pose-estimate", title: "2D Pose Estimate", icon: "initialpose.svg" },
			{ id: "mission-planning/nav-goal", title: "2D Nav Goal", icon: "simplegoal.svg" },
			{ id: "mission-planning/waypoints", title: "Waypoint Mission", icon: "waypoints.svg" },
			{ id: "mission-planning/survey", title: "Survey Mission", icon: "survey.svg" },
			{ id: "mission-planning/area-mission", title: "Bounding Box", icon: "area.svg" },
			{ id: "mission-planning/button", title: "Button", icon: "button.svg" },
			{ id: "mission-planning/altimeter", title: "Altimeter", icon: "altimeter_green.svg" }
		]
	},
	{
		group: "/data_visualization",
		pages: [
			{ id: "data-visualization/attitude-indicator", title: "Attitude Indicator", icon: "navball_icon.svg" },
			{ id: "data-visualization/pose-tracker", title: "Pose Tracker", icon: "odom.svg" },
			{ id: "data-visualization/map", title: "Map", icon: "map.svg" },
			{ id: "data-visualization/satellite-tiles", title: "Satellite Tiles", icon: "satelite.svg" },
			{ id: "data-visualization/gridcells", title: "GridCells", icon: "gridcells.svg" },
			{ id: "data-visualization/battery", title: "Battery", icon: "battery_100.svg" },
			{ id: "data-visualization/compressed-image", title: "Compressed Image", icon: "image.svg" },
			{ id: "data-visualization/marker-array", title: "Marker Array", icon: "markerarray.svg" },
			{ id: "data-visualization/path", title: "Path", icon: "path.svg" },
			{ id: "data-visualization/range", title: "Range", icon: "range.svg" },
			{ id: "data-visualization/laser-scan", title: "Laser Scan", icon: "scan.svg" },
			{ id: "data-visualization/point-cloud", title: "Point Cloud", icon: "pointcloud.svg" },
			{ id: "data-visualization/pose-with-covariance", title: "Pose with Covariance", icon: "posewithcovariancestamped.svg" },
			{ id: "data-visualization/pose-array", title: "Pose Array", icon: "posearray.svg" },
			{ id: "data-visualization/temperature", title: "Temperature", icon: "temp_warm.svg" },
			{ id: "data-visualization/speedometer", title: "Speedometer", icon: "speedometer_icon.svg" }
		]
	}
];

// Pages routable but not shown in the sidebar
const HIDDEN_PAGES = [
	{ id: "index", title: "Introduction" }
];

const DEFAULT_PAGE = "index";
const SITE_TITLE = "Vizanti Docs";
const REPO_URL = "https://github.com/MoffKalast/vizanti";
