import { IconsHeader } from "@components/IconsHeader";
import { MobileMenu, MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { iconsRoutes } from "@utils/iconsRoutes";
import { Box, Container, ScrollArea, Section, Separator } from "@radix-ui/themes";
import { DocsNav } from "@components/DocsNav";
import { ColorsHeader } from "@components/ColorsHeader";

import ReturnPolicyData from "@components/ReturnPolicyData";
import { Footer } from "@components/Footer";

export default function Home() {
	return (
		<MobileMenuProvider>
			<MobileMenu>
				<ColorsHeader />
				<ScrollArea>
					<Box pt="4" px="3" pb="9">
						<DocsNav
							routes={[
								{
									pages: [
										{
											title: "Homepage",
											slug: "icons",
										},
										{
											title: "Blog",
											slug: "blog",
										},
									],
								},
								...iconsRoutes,
							]}
						/>
					</Box>
				</ScrollArea>
			</MobileMenu>

			<TitleAndMetaTags
				title="Return Policy – SeekGPT | NarzaryAI"
				description="Learn about the return policy of SeekGPT and how we handle your data."
				image="logogs/seekgpt-logo-96x96.png"
			/>

			<IconsHeader ghost />

			
			
			<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }} pb="9">
				<ReturnPolicyData />
				
			</Container>
			<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
				<Separator size="2" />
				<Section size={{ initial: "2", md: "4" }} pb="0">
					<Footer />
				</Section>
			</Container>
		</MobileMenuProvider>
	);
}
