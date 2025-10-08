import * as React from "react";
import { Box, Flex } from "@radix-ui/themes";
import { DocsPagination } from "@components/DocsPagination";
import { allDeveloperRoutes, developerRoutes } from "@utils/developerRoutes";
import { ColorsHeader } from "./ColorsHeader";
import { DocsNav } from "./DocsNav";
import { MobileMenuProvider } from "./MobileMenu";
import { SideNav } from "./SideNav";
import { DocsPageWrapper } from "./DocsPageWrapper";
import { EditPageLink } from "./EditPageLink";
import { DeveloperMobileMenu } from "./DeveloperMobileMenu";

export function DeveloperDocsPage({ children }: { children: React.ReactNode }) {
	return (
		<MobileMenuProvider>
			<ColorsHeader />
			<DeveloperMobileMenu />

			<Flex>
				<SideNav>
					<Box pt="4" px="3" pb="9">
						<DocsNav routes={developerRoutes} />
					</Box>
				</SideNav>

				<DocsPageWrapper>
					<Box data-algolia-page-scope>{children}</Box>
					<DocsPagination allRoutes={allDeveloperRoutes} />
					<EditPageLink />
				</DocsPageWrapper>
			</Flex>
		</MobileMenuProvider>
	);
}
