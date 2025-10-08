import { developerRoutes } from "@utils/developerRoutes";
import { Box, ScrollArea } from "@radix-ui/themes";
import { DeveloperHeader } from "./DeveloperHeader";
import { DocsNav } from "./DocsNav";
import { MobileMenu } from "./MobileMenu";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const DeveloperMobileMenu = () => (
	<MobileMenu>
		<DeveloperHeader />
		<ScrollArea>
			<Box pt="4" px="3" pb="9">
				<DocsNav
					routes={[
						{
							pages: [
								{
									title: "Homepage",
									slug: "colors",
								},
								{
									title: "Blog",
									slug: "blog",
								},
							],
						},
						...developerRoutes,
						{
							label: "Resources",
							pages: [
								{
									title: "GitHub",
									slug: "https://github.com/radix-ui/colors",
									icon: <GitHubLogoIcon />,
								},
							],
						},
					]}
				/>
			</Box>
		</ScrollArea>
	</MobileMenu>
);
