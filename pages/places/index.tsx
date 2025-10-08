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
					title="About SeekGPT by NarzaryAI"
					description="ur vision is to establish SeekGPT as a globally recognized, open, and ethically grounded Artificial General Intelligence (AGI) foundational model, driven by India's diverse talent and cultural values, contributing to the advancement of humanity."
					image="seekgpt.png"
				/>
				<Section size={{ initial: "2", md: "4" }}>
					<Container>
						<SerifHeading mb="3" style={{ maxWidth: 720 }}>
							SeekGPT by NarzaryAI
							
						</SerifHeading>
						
						<Box style={{ maxWidth: 500 }}>
							<Text size="5" as="p" mb="6" color="gray">
								An open, and ethically grounded Artificial General Intelligence (AGI) foundational model.
							</Text>
						</Box>
						

						<Flex gap="4">
							<ColorsMarketingButton asChild size={{ initial: "3", xs: "4" }}>
								<NextLink href="/places/docs/overview/about-us">
									Place Documentations
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
								<NextLink href="/places/custom">Team Members</NextLink>
							</Button>
						</Flex>
						<Flex gap="4" p="8" align={"end"}>
							<Box style={{ maxWidth: 500 }}>
							<NarzaryAILogo/>
						</Box>
							
						</Flex>
					</Container>
				</Section>
			</Box>

			<Box mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
				<Section size={{ initial: "2", md: "4" }}>
					<Container>
						<Grid
							columns={{ sm: "3" }}
							gap={{ initial: "7", sm: "6", md: "9" }}
						>
							<Box style={{ maxWidth: 540 }}>
								<Flex mb="3">
									<EyeOpenIcon width="30" height="30" />
								</Flex>
								<Heading size="4" as="h3" mb="2">
									Accessibility made easy
								</Heading>
								<Text as="p" size="3">
									Text colors are guaranteed to pass target contrast ratios
									against the corresponding background colors.
								</Text>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Flex mb="3">
									<MoonIcon width="30" height="30" />
								</Flex>
								<Heading size="4" as="h3" mb="2">
									Automatic dark mode
								</Heading>
								<Text as="p" size="3">
									Switching to dark theme is as simple as applying a class to a
									container. Dark mode Just Works™.
								</Text>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Flex mb="3">
									<TransparencyGridIcon width="30" height="30" />
								</Flex>
								<Heading size="4" as="h3" mb="2">
									Transparent variants
								</Heading>
								<Text as="p" size="3">
									Each scale has a matching alpha color variant, which is handy
									for UI components that need to blend into colored backgrounds.
								</Text>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Flex mb="3">
									<Half2Icon width="30" height="30" />
								</Flex>
								<Heading size="4" as="h3" mb="2">
									APCA text contrast
								</Heading>
								<Text as="p" size="3">
									Contrast targets are based on the modern APCA contrast
									algorithm, which accurately predicts how human vision
									perceives text.
								</Text>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Flex mb="3">
									<DesktopIcon width="30" height="30" />
								</Flex>
								<Heading size="4" as="h3" mb="2">
									P3 color gamut support
								</Heading>
								<Text as="p" size="3">
									Accounts for the blending differences in the wide gamut color
									spaces and enables the brightest yellows and reds possible.
								</Text>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Flex mb="3">
									<InputIcon width="30" height="30" />
								</Flex>
								<Heading size="4" as="h3" mb="2">
									Designed for user interfaces
								</Heading>
								<Text as="p" size="3">
									Each step is designed with a specific use case in mind, such
									as backgrounds, hover states, borders, overlays, or text.
								</Text>
							</Box>
						</Grid>
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


