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
					title="Political Parties of Bodoland Territorial Council (BTC)"
					description="Major political parties active in the Bodoland Territorial Council (BTC) of Assam, India."
					image="seekgpt.png"
				/>
				<Section size={{ initial: "2", md: "4" }}>
					<Container>
						<SerifHeading mb="3" style={{ maxWidth: 820 }}>
							Political Parties of Bodoland Territorial Council (BTC)
							
						</SerifHeading>
						
						<Box style={{ maxWidth: 820 }}>
							<Text size="5" as="p" mb="6" color="gray">
							The Bodoland Territorial Council (BTC) in Assam, India, is home to several political parties that represent the interests of the Bodo people and other communities in the region. Some of the major political parties active in the BTC include:
							</Text>
							<Text size="5" as="p" mb="6" color="gray">
							1. Bodoland People's Front (BPF): A regional party that has been a significant player in the BTC, advocating for the rights and development of the Bodo community and other indigenous groups.
							</Text>
							<Text size="5" as="p" mb="6" color="gray">
							2. United People's Party Liberal (UPPL): Another key player in the BTC, the UPP focuses on the rights and development of various indigenous communities in the region.

							</Text>
							<Text size="5" as="p" mb="6" color="gray">
							3. Bharatiya Janata Party (BJP): The national party has also made inroads into the BTC, often forming alliances with regional parties to strengthen its presence in the area.
							</Text>
							<Text size="5" as="p" mb="6" color="gray">
							4. Indian National Congress (INC): The Congress party has a historical presence in Assam and continues to be active in the BTC, although its influence has waned in recent years.
							</Text>
						</Box>
						

						<Flex gap="4">
							<ColorsMarketingButton asChild size={{ initial: "3", xs: "4" }}>
								<NextLink href="/party/bpf">
									About BPF
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
								<NextLink href="/party/uppl">About UPPL</NextLink>
							</Button>
							<Button
								highContrast
								variant="soft"
								color="gray"
								size={{ initial: "3", xs: "4" }}
								asChild
							>
								<NextLink href="/party/bjp">About BJP</NextLink>
							</Button>
							<Button
								highContrast
								variant="soft"
								color="gray"
								size={{ initial: "3", xs: "4" }}
								asChild
							>
								<NextLink href="/party/inc">About INC</NextLink>
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


