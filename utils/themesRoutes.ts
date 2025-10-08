export const themesRoutes = [
	{
		label: "Overview",
		pages: [
			{
				title: "Getting started",
				slug: "research/docs/overview/getting-started",
			},
			{ title: "Styling", slug: "research/docs/overview/styling" },
			{ title: "Layout", slug: "research/docs/overview/layout" },
			{ title: "Releases", slug: "research/docs/overview/releases" },
			{ title: "Resources", slug: "research/docs/overview/resources" },
		],
	},
	{
		label: "Theme",
		pages: [
			{ title: "Overview", slug: "research/docs/theme/overview" },
			{ title: "Color", slug: "research/docs/theme/color" },
			{ title: "Dark mode", slug: "research/docs/theme/dark-mode" },
			{ title: "Typography", slug: "research/docs/theme/typography" },
			{ title: "Spacing", slug: "research/docs/theme/spacing" },
			{ title: "Breakpoints", slug: "research/docs/theme/breakpoints" },
			{ title: "Radius", slug: "research/docs/theme/radius" },
			{ title: "Shadows", slug: "research/docs/theme/shadows" },
			{ title: "Cursors", slug: "research/docs/theme/cursors" },
		],
	},

	{
		label: "Layout",
		pages: [
			{ title: "Box", slug: "research/docs/components/box" },
			{ title: "Flex", slug: "research/docs/components/flex" },
			{ title: "Grid", slug: "research/docs/components/grid" },
			{ title: "Container", slug: "research/docs/components/container" },
			{ title: "Section", slug: "research/docs/components/section" },
		],
	},
	{
		label: "Typography",
		pages: [
			{ title: "Text", slug: "research/docs/components/text" },
			{ title: "Heading", slug: "research/docs/components/heading" },
			{ title: "Blockquote", slug: "research/docs/components/blockquote" },
			{ title: "Code", slug: "research/docs/components/code" },
			{ title: "Em", slug: "research/docs/components/em" },
			{ title: "Kbd", slug: "research/docs/components/kbd" },
			{ title: "Link", slug: "research/docs/components/link" },
			{ title: "Quote", slug: "research/docs/components/quote" },
			{ title: "Strong", slug: "research/docs/components/strong" },
		],
	},

	{
		label: "Components",
		pages: [
			{ title: "Alert Dialog", slug: "research/docs/components/alert-dialog" },
			{ title: "Aspect Ratio", slug: "research/docs/components/aspect-ratio" },
			{ title: "Avatar", slug: "research/docs/components/avatar" },
			{ title: "Badge", slug: "research/docs/components/badge" },
			{ title: "Button", slug: "research/docs/components/button" },
			{ title: "Callout", slug: "research/docs/components/callout" },
			{ title: "Card", slug: "research/docs/components/card" },
			{ title: "Checkbox", slug: "research/docs/components/checkbox" },
			{
				title: "Checkbox Group",
				slug: "research/docs/components/checkbox-group",
			},
			{
				title: "Checkbox Cards",
				slug: "research/docs/components/checkbox-cards",
			},
			{ title: "Context Menu", slug: "research/docs/components/context-menu" },
			{ title: "Data List", slug: "research/docs/components/data-list" },
			{ title: "Dialog", slug: "research/docs/components/dialog" },
			{ title: "Dropdown Menu", slug: "research/docs/components/dropdown-menu" },
			{ title: "Hover Card", slug: "research/docs/components/hover-card" },
			{ title: "Icon Button", slug: "research/docs/components/icon-button" },
			{ title: "Inset", slug: "research/docs/components/inset" },
			{ title: "Popover", slug: "research/docs/components/popover" },
			{ title: "Progress", slug: "research/docs/components/progress" },
			{ title: "Radio", slug: "research/docs/components/radio" },
			{ title: "Radio Group", slug: "research/docs/components/radio-group" },
			{ title: "Radio Cards", slug: "research/docs/components/radio-cards" },
			{ title: "Scroll Area", slug: "research/docs/components/scroll-area" },
			{
				title: "Segmented Control",
				slug: "research/docs/components/segmented-control",
			},
			{ title: "Select", slug: "research/docs/components/select" },
			{ title: "Separator", slug: "research/docs/components/separator" },
			{ title: "Skeleton", slug: "research/docs/components/skeleton" },
			{ title: "Slider", slug: "research/docs/components/slider" },
			{ title: "Spinner", slug: "research/docs/components/spinner" },
			{ title: "Switch", slug: "research/docs/components/switch" },
			{ title: "Table", slug: "research/docs/components/table" },
			{ title: "Tabs", slug: "research/docs/components/tabs" },
			{ title: "Tab Nav", slug: "research/docs/components/tab-nav" },
			{ title: "Text Area", slug: "research/docs/components/text-area" },
			{ title: "Text Field", slug: "research/docs/components/text-field" },
			{ title: "Tooltip", slug: "research/docs/components/tooltip" },
		],
	},

	{
		label: "Utilities",
		pages: [
			{
				title: "Accessible Icon",
				slug: "research/docs/components/accessible-icon",
			},
			{ title: "Portal", slug: "research/docs/components/portal" },
			{ title: "Reset", slug: "research/docs/components/reset" },
			{ title: "Slot", slug: "research/docs/components/slot" },
			{ title: "Theme", slug: "research/docs/components/theme" },
			{
				title: "Visually Hidden",
				slug: "research/docs/components/visually-hidden",
			},
		],
	},
];

export type PageProps = {
	title: string;
	slug: string;
	deprecated?: boolean;
	preview?: boolean;
};

export type RouteProps = {
	label: string;
	pages: PageProps[];
};

export const allThemesRoutes = themesRoutes.reduce<PageProps[]>((acc, curr) => {
	return [...acc, ...curr.pages];
}, []);
