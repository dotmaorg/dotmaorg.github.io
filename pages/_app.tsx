import * as React from "react";
import { AppProps } from "next/app";
import { Router, useRouter } from "next/router";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "@components/ThemeProvider";
import { PrimitivesDocsPage } from "@components/PrimitivesDocsPage";
import { ColorsDocsPage } from "@components/ColorsDocsPage";
import { DeveloperDocsPage } from "@components/DeveloperDocsPage";
import { handleUrlChange } from "@utils/analytics";
import { CssLibPreferenceProvider } from "@components/CssLibPreference";
import { ThemesDocsPage } from "@components/ThemesDocsPage";
import { Favicon } from "@components/Favicon";
import "@radix-ui/themes/styles.css";
import "./styles.css";
import "./syntax-highlighting.css";

function Pages({ Component, pageProps }: AppProps) {
	const router = useRouter();

	if (router.pathname.startsWith("/peoples/docs")) {
		return (
			<Theme
				accentColor="blue"
				grayColor="slate"
				className="radix-themes-custom-fonts"
			>
				<PrimitivesDocsPage>
					<Favicon />
					<Component {...pageProps} />
				</PrimitivesDocsPage>
			</Theme>
		);
	}

	if (router.pathname.startsWith("/peoples")) {
		return (
			<Theme
				accentColor="blue"
				grayColor="slate"
				className="radix-themes-custom-fonts"
			>
				<Favicon />
				<Component {...pageProps} />
			</Theme>
		);
	}

	if (router.pathname.startsWith("/party/docs")) {
		return (
			<Theme
				accentColor="pink"
				grayColor="gray"
				className="radix-themes-custom-fonts"
			>
				<ColorsDocsPage>
					<Favicon />
					<Component {...pageProps} />
				</ColorsDocsPage>
			</Theme>
		);
	}

	if (router.pathname.startsWith("/party")) {
		return (
			<Theme
				accentColor="pink"
				grayColor="gray"
				className="radix-themes-custom-fonts"
			>
				<Favicon />
				<Component {...pageProps} />
			</Theme>
		);
	}

	if (router.pathname.startsWith("/research/docs")) {
		return (
			<Theme accentColor="indigo" className="radix-themes-custom-fonts">
				<ThemesDocsPage>
					<Favicon />
					<Component {...pageProps} />
				</ThemesDocsPage>
			</Theme>
		);
	}

	if (router.pathname.startsWith("/research/playground")) {
		return (
			<Theme accentColor="indigo">
				<Favicon />
				<Component {...pageProps} />
			</Theme>
		);
	}

	if (router.pathname.startsWith("/research")) {
		return (
			<Theme accentColor="indigo" className="radix-themes-custom-fonts">
				<Favicon />
				<Component {...pageProps} />
			</Theme>
		);
	}
	if (router.pathname.startsWith("/places/docs")) {
		return (
			<Theme 
				accentColor="teal"
				//grayColor="slate"
				className="radix-themes-custom-fonts"
			>
				<DeveloperDocsPage>
					<Favicon />
					<Component {...pageProps} />
				</DeveloperDocsPage>
			</Theme>
		);
	}
	if (router.pathname.startsWith("/places")) {
		return (
			<Theme
				accentColor="teal"
				//grayColor="slate"
				className="radix-themes-custom-fonts"
			>
				<Favicon />
				<Component {...pageProps} />
			</Theme>
		);
	}
	

	if (router.pathname.startsWith("/blog")) {
		return (
			<Theme accentColor="indigo" className="radix-themes-custom-fonts">
				<Favicon />
				<Component {...pageProps} />
			</Theme>
		);
	}

	return (
		<Theme accentColor="indigo" className="radix-themes-custom-fonts">
			<Favicon />
			<Component {...pageProps} />
		</Theme>
	);
}

function App(props: AppProps) {
	useAnalytics();

	return (
		<CssLibPreferenceProvider>
			<ThemeProvider>
				<Pages {...props} />
			</ThemeProvider>
		</CssLibPreferenceProvider>
	);
}

export default App;

function useAnalytics() {
	React.useEffect(() => {
		Router.events.on("routeChangeComplete", handleUrlChange);
		return () => {
			Router.events.off("routeChangeComplete", handleUrlChange);
		};
	}, []);
}
