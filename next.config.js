const path = require("path");
const { globSync } = require("glob");
const compareVersions = require("compare-versions");

module.exports = {
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.mjs/,
			include: /node_modules/,
			type: "javascript/auto",
		});
		return config;
	},

	// Next.js config
	async redirects() {
		return [
			{
				source: "/case-studies/:slug*",
				destination: "/peoples/case-studies/:slug*",
				permanent: true,
			},
			{
				source: "/party/docs",
				destination: "/party/docs/overview/about-us",
				permanent: true,
			},
			{
				source: "/party/docs/tests/:slug*",
				destination: "/party",
				permanent: true,
			},
			{
				source: "/docs/party/palette-composition/the-scales",
				destination: "/party/docs/palette-composition/scales",
				permanent: true,
			},
			{
				source: "/docs/party/getting-started/:slug*",
				destination: "/party/docs/overview/:slug*",
				permanent: true,
			},
			{
				source: "/docs/party/:slug*",
				destination: "/party/docs/:slug*",
				permanent: true,
			},
			{
				source: "/places/docs",
				destination: "/places/docs/overview/installation",
				permanent: true,
			},
			{
				source: "/places/docs/tests/:slug*",
				destination: "/places",
				permanent: true,
			},
			{
				source: "/docs/places/palette-composition/the-scales",
				destination: "/places/docs/palette-composition/scales",
				permanent: true,
			},
			{
				source: "/docs/places/getting-started/:slug*",
				destination: "/places/docs/overview/:slug*",
				permanent: true,
			},
			{
				source: "/docs/places/:slug*",
				destination: "/places/docs/:slug*",
				permanent: true,
			},
			{
				source: "/docs/peoples",
				destination: "/peoples/docs/overview/introduction",
				permanent: false,
			},
			{
				source: "/docs/peoples/utilities/aspect-ratio/:slug*",
				destination: "/peoples/docs/components/aspect-ratio",
				permanent: true,
			},
			{
				source: "/docs/peoples/utilities/label/:slug*",
				destination: "/peoples/docs/components/label",
				permanent: true,
			},
			{
				source: "/peoples/docs/components/:slug/:version",
				destination: "/peoples/docs/components/:slug",
				permanent: true,
			},
			{
				source: "/peoples/docs/utilities/:slug/:version",
				destination: "/peoples/docs/utilities/:slug",
				permanent: true,
			},
			{
				source: "/docs/peoples/:slug*",
				destination: "/peoples/docs/:slug*",
				permanent: true,
			},
			{
				source: "/peoples/docs",
				destination: "/peoples/docs/overview/introduction",
				permanent: false,
			},
			{
				source: "/research",
				destination: "/",
				permanent: false,
			},
			{
				source: "/research/docs",
				destination: "/research/docs/overview/getting-started",
				permanent: false,
			},
		];
	},
};
