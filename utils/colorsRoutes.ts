export const colorsRoutes = [
	{
		label: "Overview",
		pages: [
			{
				title: "About Us",
				slug: "company/docs/overview/about-us",
				draft: false,
			},
			{
				title: "Usage",
				slug: "company/docs/overview/usage",
				draft: false,
			},
			{
				title: "Aliasing",
				slug: "company/docs/overview/aliasing",
				draft: false,
			},
			{
				title: "Custom palettes",
				slug: "company/docs/overview/custom-palettes",
				draft: false,
			},
			{
				title: "Releases",
				slug: "company/docs/overview/releases",
				draft: false,
			},
		],
	},

	{
		label: "Palette composition",
		pages: [
			{
				title: "Scales",
				slug: "company/docs/palette-composition/scales",
				draft: false,
			},
			{
				title: "Composing a palette",
				slug: "company/docs/palette-composition/composing-a-palette",
				draft: false,
			},
			{
				title: "Understanding the scale",
				slug: "company/docs/palette-composition/understanding-the-scale",
				draft: false,
			},
		],
	},
];

export const allColorsRoutes = colorsRoutes.reduce<
	{ title: string; slug: string; draft: boolean }[]
>((acc, curr) => {
	acc = [...acc, ...curr.pages.filter((p) => p.draft !== true)];
	return acc;
}, []);
