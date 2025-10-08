export const primitivesRoutes = [
	{
		label: "Overview",
		pages: [
			{ title: "Introduction", slug: "products/docs/overview/introduction" },
			{
				title: "Getting started",
				slug: "products/docs/overview/getting-started",
			},
			{
				title: "Accessibility",
				slug: "products/docs/overview/accessibility",
			},
			{ title: "Releases", slug: "products/docs/overview/releases" },
		],
	},

	{
		label: "Guides",
		pages: [
			{ title: "Styling", slug: "products/docs/guides/styling" },
			{ title: "Animation", slug: "products/docs/guides/animation" },
			{ title: "Composition", slug: "products/docs/guides/composition" },
			{
				title: "Server-side rendering",
				slug: "products/docs/guides/server-side-rendering",
			},
		],
	},

	{
		label: "Components",
		pages: [
			{ title: "Accordion", slug: "products/docs/components/accordion" },
			{
				title: "Alert Dialog",
				slug: "products/docs/components/alert-dialog",
			},
			{
				title: "Aspect Ratio",
				slug: "products/docs/components/aspect-ratio",
			},
			{ title: "Avatar", slug: "products/docs/components/avatar" },
			{ title: "Checkbox", slug: "products/docs/components/checkbox" },
			{ title: "Collapsible", slug: "products/docs/components/collapsible" },
			{
				title: "Context Menu",
				slug: "products/docs/components/context-menu",
			},
			{ title: "Dialog", slug: "products/docs/components/dialog" },
			{
				title: "Dropdown Menu",
				slug: "products/docs/components/dropdown-menu",
			},
			{ title: "Form", slug: "products/docs/components/form", preview: true },
			{ title: "Hover Card", slug: "products/docs/components/hover-card" },
			{ title: "Label", slug: "products/docs/components/label" },
			{ title: "Menubar", slug: "products/docs/components/menubar" },
			{
				title: "Navigation Menu",
				slug: "products/docs/components/navigation-menu",
			},
			{
				title: "One-Time Password Field",
				slug: "products/docs/components/one-time-password-field",
				preview: true,
			},
			{
				title: "Password Toggle Field",
				slug: "products/docs/components/password-toggle-field",
				preview: true,
			},
			{ title: "Popover", slug: "products/docs/components/popover" },
			{ title: "Progress", slug: "products/docs/components/progress" },
			{ title: "Radio Group", slug: "products/docs/components/radio-group" },
			{ title: "Scroll Area", slug: "products/docs/components/scroll-area" },
			{ title: "Select", slug: "products/docs/components/select" },
			{ title: "Separator", slug: "products/docs/components/separator" },
			{ title: "Slider", slug: "products/docs/components/slider" },
			{ title: "Switch", slug: "products/docs/components/switch" },
			{ title: "Tabs", slug: "products/docs/components/tabs" },
			{ title: "Toast", slug: "products/docs/components/toast" },
			{ title: "Toggle", slug: "products/docs/components/toggle" },
			{
				title: "Toggle Group",
				slug: "products/docs/components/toggle-group",
			},
			{ title: "Toolbar", slug: "products/docs/components/toolbar" },
			{ title: "Tooltip", slug: "products/docs/components/tooltip" },
		],
	},

	{
		label: "Utilities",
		pages: [
			{
				title: "Accessible Icon",
				slug: "products/docs/utilities/accessible-icon",
			},
			{
				title: "Direction Provider",
				slug: "products/docs/utilities/direction-provider",
			},
			{ title: "Portal", slug: "products/docs/utilities/portal" },
			{ title: "Slot", slug: "products/docs/utilities/slot" },
			{
				title: "Visually Hidden",
				slug: "products/docs/utilities/visually-hidden",
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

export const allPrimitivesRoutes = primitivesRoutes.reduce<
	{
		title: string;
		slug: string;
		deprecated?: boolean;
		preview?: boolean;
	}[]
>((acc, curr: RouteProps) => {
	return [...acc, ...curr.pages];
}, []);
