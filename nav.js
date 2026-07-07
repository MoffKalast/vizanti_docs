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
		group: "/widgets",
		pages: [
			{ id: "widgets/general-tools", title: "General Tools" },
			{ id: "widgets/mission-planning", title: "Mission Planning" },
			{ id: "widgets/data-visualization", title: "Data Visualization" }
		]
	},
	{
		group: "/widgets/in_depth",
		pages: [
			{ id: "widgets/satellite-tiles", title: "Satellite Tiles" },
			{ id: "widgets/waypoints", title: "Waypoint Missions" },
			{ id: "widgets/button", title: "Button State Pattern" }
		]
	}
];

const DEFAULT_PAGE = "getting-started";
const SITE_TITLE = "Vizanti Docs";
const REPO_URL = "https://github.com/MoffKalast/vizanti";
