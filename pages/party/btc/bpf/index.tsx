import * as React from "react";
import NextLink from "next/link";
import {
	Box,
	Text,
	Grid,
	Heading,
	Container,
	Section,
	Separator,
	Flex,
	ScrollArea,
	Button,
} from "@radix-ui/themes";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { Footer } from "@components/Footer";
import { ColorsHeader } from "@components/ColorsHeader";
import { MobileMenuProvider } from "@components/MobileMenu";
import { ColorsMarketingButton } from "@components/ColorsMarketingButton";
import { SerifHeading } from "@components/SerifHeading";
import { ColorsMobileMenu } from "@components/ColorsMobileMenu";
import {
	DesktopIcon,
	EyeOpenIcon,
	Half2Icon,
	InputIcon,
	MoonIcon,
	TransparencyGridIcon,
} from "@radix-ui/react-icons";
import { Swatch } from "@components/Swatch";
import Head from "next/head";
import styles from "./index.module.css";
import { ColorUsageRange } from "@components/ColorUsageRange";
import { ColorStepLabel } from "@components/ColorStepLabel";
import { RadixLogo } from "@components/RadixLogo";
import { BoxLink } from "@components/BoxLink";
import { AccessibleIcon } from "@radix-ui/themes";
import {NarzaryAILogo} from "@components/NarzaryAILogo"
export default function ColorsHome() {
	return (
		<MobileMenuProvider>
			<ColorsMobileMenu />

			<Head>
				<style>
					{`
            :is(.dark, .dark-theme) :is(body, .radix-themes) {
              --color-background: #0b0b0b;
              --color-panel-solid: var(--gray-1);
            }
          `}
				</style>
			</Head>

			<Box
				style={{
					position: "absolute",
					left: 0,
					right: 0,
					height: 480,
					opacity: 0.6,
					background:
						"linear-gradient(to bottom, var(--crimson-4), var(--amber-2), transparent)",
				}}
			/>

			<ColorsHeader ghost />

			<Box mx={{ initial: "5", xs: "6", sm: "7", md: "9" }} position="relative">
				<TitleAndMetaTags
					title="Bodoland Peoples Front (BPF) - Political Party of BTC"
					description="Bodoland Peoples Front (BPF) is a regional political party in Assam, India, primarily representing the interests of the Bodo people. Founded in 2005, BPF has been a significant player in Assam's political landscape, advocating for the rights and development of the Bodo community. The party has participated in various state elections and has been part of coalition governments in Assam. BPF focuses on issues such as autonomy for Bodoland, cultural preservation, and socio-economic development of the Bodo people."
					image="nangal.svg"
				/>
				<Section size={{ initial: "2", md: "4" }}>
					<Container>
						<SerifHeading mb="3" style={{ maxWidth: 920 }}>
							Bodoland People's Front (BPF)
							
						</SerifHeading>
						<Flex gap="4">
						<Box style={{ maxWidth: 820, marginBottom: 32 }}>
							<Text size="5" as="p" mb="6" color="gray">
							Bodoland Peoples Front (BPF) is a regional political party in Assam, India, primarily representing the interests of the Bodo people. Founded in 2005, BPF has been a significant player in Assam's political landscape, advocating for the rights and development of the Bodo community. The party has participated in various state elections and has been part of coalition governments in Assam. BPF focuses on issues such as autonomy for Bodoland, cultural preservation, and socio-economic development of the Bodo people.
							</Text>
						</Box>
						<Box>
							<img
								src="/logos/nangal.svg"
								alt="Bodoland Peoples Front Logo"
								style={{ width: 320, height: "auto", borderRadius: 8 }}
							/>
						</Box>
						</Flex>

						<Flex gap="4">
							<ColorsMarketingButton asChild size={{ initial: "3", xs: "4" }}>
								<NextLink href="/party/join">
									Are you a BPF Supporter? Join Now{" "}
									<svg
										width="14"
										height="14"
										viewBox="0 0 12 12"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentcolor"
										style={{ opacity: 1, marginRight: -3 }}
									>
										<path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z" />
									</svg>
								</NextLink>
							</ColorsMarketingButton>

							<Button
								highContrast
								variant="soft"
								color="gray"
								size={{ initial: "3", xs: "4" }}
								asChild
							>
								<NextLink href="/party/btc/bpf/members">Party Members</NextLink>
							</Button>
						</Flex>
						
					</Container>
				</Section>
			</Box>

			
			<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
				<Separator size="2" />
				<Section size={{ initial: "2", md: "4" }} pb="0">
					<Footer />
				</Section>
			</Container>
		</MobileMenuProvider>
	);
}


