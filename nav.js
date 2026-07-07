// Sidebar structure. To add a page: create pages/<id>.md and add an entry here.
const NAV = [
	{
		group: "/getting_started",
		pages: [
			{ id: "getting-started", title: "Getting Started" },
			{ id: "installation", title: "Installation & Support" },
			{ id: "configuration", title: "Configuration" },
			{ id: "demo-videos", title: "Demo Videos" },
			{ id: "faq", title: "Tips & FAQ" }
		]
	},
	{
		group: "/general_tools",
		pages: [
			{ id: "general-tools/overview", title: "Overview" },
			{ id: "general-tools/global-settings", title: "Global Settings" },
			{ id: "general-tools/rosbridge", title: "Rosbridge" },
			{ id: "general-tools/grid", title: "Grid" },
			{ id: "general-tools/tf", title: "TF" },
			{ id: "general-tools/robot-model", title: "Robot Model" },
			{ id: "general-tools/param-reconfigure", title: "Param Reconfigure" },
			{ id: "general-tools/bag-recorder", title: "Bag Recorder" },
			{ id: "general-tools/node-manager", title: "Node Manager" },
			{ id: "general-tools/topic-inspector", title: "Topic Inspector" },
			{ id: "general-tools/add-widget", title: "Add Widget" }
		]
	},
	{
		group: "/mission_planning",
		pages: [
			{ id: "mission-planning/overview", title: "Overview" },
			{ id: "mission-planning/teleop-joystick", title: "Teleop Joystick" },
			{ id: "mission-planning/pose-estimate", title: "2D Pose Estimate" },
			{ id: "mission-planning/nav-goal", title: "2D Nav Goal" },
			{ id: "mission-planning/waypoints", title: "Waypoint Mission" },
			{ id: "mission-planning/area-mission", title: "Area Mission" },
			{ id: "mission-planning/button", title: "Button" },
			{ id: "mission-planning/altimeter", title: "Altimeter" }
		]
	},
	{
		group: "/data_visualization",
		pages: [
			{ id: "data-visualization/overview", title: "Overview" },
			{ id: "data-visualization/attitude-indicator", title: "Attitude Indicator" },
			{ id: "data-visualization/pose-tracker", title: "Pose Tracker" },
			{ id: "data-visualization/map", title: "Map" },
			{ id: "data-visualization/satellite-tiles", title: "Satellite Tiles" },
			{ id: "data-visualization/gridcells", title: "GridCells" },
			{ id: "data-visualization/battery", title: "Battery" },
			{ id: "data-visualization/compressed-image", title: "Compressed Image" },
			{ id: "data-visualization/marker-array", title: "Marker Array" },
			{ id: "data-visualization/path", title: "Path" },
			{ id: "data-visualization/range", title: "Range" },
			{ id: "data-visualization/laser-scan", title: "Laser Scan" },
			{ id: "data-visualization/point-cloud", title: "Point Cloud" },
			{ id: "data-visualization/pose-with-covariance", title: "Pose with Covariance" },
			{ id: "data-visualization/pose-array", title: "Pose Array" },
			{ id: "data-visualization/temperature", title: "Temperature" },
			{ id: "data-visualization/speedometer", title: "Speedometer" }
		]
	}
];

const DEFAULT_PAGE = "getting-started";
const SITE_TITLE = "Vizanti Docs";
const REPO_URL = "https://github.com/MoffKalast/vizanti";
