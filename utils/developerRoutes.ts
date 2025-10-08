export const developerRoutes = [
	{
		label: "Overview",
		pages: [
			{
				title: "Installation",
				slug: "developer/docs/overview/installation",
				draft: false,
			},
			{
				title: "Usage",
				slug: "developer/docs/overview/usage",
				draft: false,
			},
			{
				title: "Aliasing",
				slug: "developer/docs/overview/aliasing",
				draft: false,
			},
			{
				title: "Custom palettes",
				slug: "developer/docs/overview/custom-palettes",
				draft: false,
			},
			{
				title: "Releases",
				slug: "developer/docs/overview/releases",
				draft: false,
			},
		],
	},

	{
		label: "Palette composition",
		pages: [
			{
				title: "Scales",
				slug: "developer/docs/palette-composition/scales",
				draft: false,
			},
			{
				title: "Composing a palette",
				slug: "developer/docs/palette-composition/composing-a-palette",
				draft: false,
			},
			{
				title: "Understanding the scale",
				slug: "developer/docs/palette-composition/understanding-the-scale",
				draft: false,
			},
		],
	},
];

export const allDeveloperRoutes = developerRoutes.reduce<
	{ title: string; slug: string; draft: boolean }[]
>((acc, curr) => {
	acc = [...acc, ...curr.pages.filter((p) => p.draft !== true)];
	return acc;
}, []);
