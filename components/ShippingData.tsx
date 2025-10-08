
import React, { useState } from "react";
import { Box, Container, Heading, Text, Card, Flex, Separator, Link, Section, Grid, Button } from "@radix-ui/themes";
import * as Accordion from "@radix-ui/react-accordion";


const steps = [
    {
        label: "Create Account",
        content: (
            <Box p="4">
                <Heading size="4" mb="2">Account Registration & Verification</Heading>
                <Text as="p">To access our services, you must first create an account on SeekGPT.org. Upon successful registration and verification of your email address, your unique API key(s) will be automatically generated and prepared for you.</Text>
            </Box>
        ),
    },
    {
        label: "Get API Key",
        content: (
            <Box p="4">
                <Heading size="4" mb="2">Instant API Key Access</Heading>
                <Text as="p">Your API key is made available <strong>immediately</strong> within your secure account dashboard. You can view, copy, or manage your API key from this dashboard at any time. The entire process is automated and instantaneous, with no processing delays.</Text>
            </Box>
        ),
    },
    {
        label: "Confirm & Use",
        content: (
            <Box p="4">
                <Heading size="4" mb="2">Confirmation & Usage</Heading>
                <Text as="p">You will receive a confirmation email sent to your registered email address, confirming that your account is active and your API key is ready for use. This email serves as the official confirmation of service "delivery." You can start making API calls right away.</Text>
            </Box>
        ),
    },
];


const ShippingData: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <Container size="3" px={{ initial: "4", sm: "6", md: "7" }} py={{ initial: "5", sm: "7" }}>
            <Section mb="6">
                <Heading size="6" align="center" mb="2">Service Delivery Explained</Heading>
                <Text as="p" align="center" size="3" color="gray">How you get instant access to the SeekGPT.org LLM Gateway.</Text>
            </Section>

            <Card variant="surface" mb="6" style={{ background: "#F5F0E8" }}>
                <Box p="4" style={{ textAlign: "center" }}>
                    <Heading size="5" mb="2">100% Digital. Instant Access.</Heading>
                    <Text as="p" size="3" color="gray">As a provider of purely digital API services, we don't ship any physical products. All our services are delivered electronically and immediately, ensuring you can start building without delay.</Text>
                    <Flex gap="5" justify="center" align="center" mt="4">
                        <Box style={{ textAlign: "center" }}>
                            <Text size="6">☁️</Text>
                            <Text as="p" size="1" mt="1">API Service</Text>
                        </Box>
                        <Box style={{ textAlign: "center" }}>
                            <Text size="6">⚡</Text>
                            <Text as="p" size="1" mt="1">Instant Delivery</Text>
                        </Box>
                        <Box style={{ textAlign: "center" }}>
                            <Text size="6">🚚🚫</Text>
                            <Text as="p" size="1" mt="1">No Physical Shipping</Text>
                        </Box>
                    </Flex>
                </Box>
            </Card>

            <Section mb="6">
                <Heading size="5" align="center" mb="2">Your Journey to Access</Heading>
                <Text as="p" align="center" size="3" color="gray" mb="4">Getting started is a simple, automated process. Click on each step below to see the details of how your API key is generated and delivered to you right after you sign up.</Text>
                <Flex gap="3" justify="center" align="center" mb="4">
                    {steps.map((step, idx) => (
                        <React.Fragment key={step.label}>
                            <Button
                                variant={activeStep === idx ? "solid" : "soft"}
                                color={activeStep === idx ? "bronze" : "gray"}
                                size="3"
                                radius="full"
                                onClick={() => setActiveStep(idx)}
                                style={{ minWidth: 56, minHeight: 56, fontWeight: "bold" }}
                            >
                                {idx + 1}
                            </Button>
                            {idx < steps.length - 1 && <Separator orientation="horizontal" size="2" color="bronze" style={{ width: 40, alignSelf: "center" }} />}
                        </React.Fragment>
                    ))}
                </Flex>
                <Card style={{ marginTop: "1rem", padding: "1rem" }}>
                    {steps[activeStep].content}
                </Card>
            </Section>

            <Section mb="6">
                <Heading size="5" align="center" mb="2">Key Policy Points</Heading>
                <Text as="p" align="center" size="3" color="gray" mb="4">This section provides a quick overview of our policies regarding service uptime, costs, and availability.</Text>
                <Grid columns={{ initial: "1", md: "3" }} gap="4">
                    <Card variant="classic" style={{ textAlign: "center", padding: "1rem" }}>
                        <Text size="6" mb="2">🕒</Text>
                        <Heading size="4" mb="1">Service Availability</Heading>
                        <Text as="p" size="2" color="gray">Our API services are designed for 24/7/365 availability. We provide advance notice for any scheduled maintenance that may cause significant interruption.</Text>
                    </Card>
                    <Card variant="classic" style={{ textAlign: "center", padding: "1rem" }}>
                        <Text size="6" mb="2">💸</Text>
                        <Heading size="4" mb="1">"Shipping" Costs</Heading>
                        <Text as="p" size="2" color="gray">There are <strong>zero shipping, handling, or delivery fees</strong>. The price you see for our service plans is the total price, plus any applicable taxes.</Text>
                    </Card>
                    <Card variant="classic" style={{ textAlign: "center", padding: "1rem" }}>
                        <Text size="6" mb="2">🌍</Text>
                        <Heading size="4" mb="1">Geographic Availability</Heading>
                        <Text as="p" size="2" color="gray">Our services are available globally via the internet, with the exception of regions restricted by international law or our service policies.</Text>
                    </Card>
                </Grid>
            </Section>

            <Section mb="6" mx="auto" style={{ maxWidth: 700 }}>
                <Heading size="5" align="center" mb="2">Troubleshooting & Support</Heading>
                <Text as="p" align="center" size="3" color="gray" mb="4">If you've encountered an issue with receiving your confirmation or accessing your API key, expand the section below for a list of common solutions and how to get in touch with our team for help.</Text>
                        <Accordion.Root type="single" collapsible>
                            <Accordion.Item value="delivery-issues">
                                <Accordion.Trigger asChild>
                                    <Button variant="soft" color="bronze" size="3" style={{ width: "100%", justifyContent: "space-between" }}>
                                        <Text size="4" weight="bold">Issues with Service Delivery?</Text>
                                    </Button>
                                </Accordion.Trigger>
                                <Accordion.Content asChild>
                                    <Box p="4" style={{ borderTop: "1px solid #e5e7eb" }}>
                                        <Text as="p" mb="2">If you have completed the registration process but cannot access your service, please try these steps:</Text>
                                        <ol style={{ listStyleType: "decimal", paddingLeft: 20, marginBottom: 8 }}>
                                            <li><Text as="span">Check the spam or junk folder of your registered email account for the confirmation email.</Text></li>
                                            <li><Text as="span">Ensure there were no typos in the email address you provided during sign-up.</Text></li>
                                            <li><Text as="span">Log out and log back into your account dashboard to refresh the session.</Text></li>
                                        </ol>
                                        <Text as="p" mt="2">If you continue to experience issues, please contact our support team for assistance.</Text>
                                    </Box>
                                </Accordion.Content>
                            </Accordion.Item>
                        </Accordion.Root>
            </Section>

            <Section mt="8" style={{ textAlign: "center" }}>
                <Heading size="4" mb="2">Contact Us</Heading>
                <Text as="p" mb="2">For any questions or issues regarding the delivery or access of your service, please contact our customer support team:</Text>
                <Link href="mailto:seekgpt.org@gmail.com" size="3" weight="bold" color="bronze" underline="always">
                    seekgpt.org@gmail.com
                </Link>
                <Text as="p" mt="6" size="1" color="gray">&copy; 2025 SeekGPT.org. All rights reserved.</Text>
            </Section>
        </Container>
    );
};

export default ShippingData;
