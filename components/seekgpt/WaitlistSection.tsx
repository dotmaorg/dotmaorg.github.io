import * as React from "react";
import NextLink from "next/link";
import { SerifHeading } from "@components/SerifHeading";
import { Box, Button, Container, Section, Text } from "@radix-ui/themes";



export const WaitlistSection = () => {

    return (

        <Section size={{ initial: "2", md: "4" }}>
			<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
				<Box mb="6">
					<Box mb="5">
						<SerifHeading mb="3" style={{ maxWidth: 560 }}>
							SeekGPT AI Platform
						</SerifHeading>
						<Text size="5" as="p" mb="6" color="gray" style={{ maxWidth: 520 }}>
							Manage your API keys, track usage, and explore the SeekGPT ecosystem.
						</Text>
					</Box>
					<NextLink href="https://ai.seekgpt.org" passHref legacyBehavior>
						<Button
							asChild
							size={{ initial: "3", xs: "4" }}
							color="gray"
							highContrast
						>
							<a target="_blank">
								SeekGPT AI Platform
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
							</a>
						</Button>
					</NextLink>
				</Box>
			</Container>
        </Section>

    );
}