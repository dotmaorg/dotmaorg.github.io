

import React from "react";
import { Box, Container, Heading, Text, Card, Section, Link } from "@radix-ui/themes";

const ReturnPolicyData: React.FC = () => (
  <Container size="3" px={{ initial: "4", sm: "6", md: "7" }} py={{ initial: "5", sm: "7" }}>
    <Section mb="6">
      <Heading size="6" align="center" mb="2">Return &amp; Refund Policy for SeekGPT.org</Heading>
      <Text as="p" align="center" size="3" color="gray" mb="2">Effective Date: September 18, 2025</Text>
    </Section>
    <Card variant="surface" mb="6" style={{ background: "#F5F0E8" }}>
      <Box p="4">
        <Heading size="5" mb="2">1. Our Commitment</Heading>
        <Text as="p" mb="2">Welcome to SeekGPT.org. We are committed to your satisfaction and providing a reliable Large Language Model (LLM) Gateway Service. As we provide a digital, non-tangible, and irrevocable service, this policy outlines the conditions under which a refund may be granted.</Text>
        <Text as="p" mb="2">Please read this policy carefully before making any purchase. By using our services, you agree to this Return &amp; Refund Policy.</Text>
      </Box>
    </Card>
    <Section mb="6">
      <Heading size="5" mb="2">2. General Policy</Heading>
      <Text as="p" mb="2">Due to the digital nature of our API services, traditional "returns" are not possible. Once an API key is used and tokens are consumed, the service has been rendered and cannot be returned. Our costs are directly tied to usage passed on to third-party LLM providers.</Text>
      <Text as="p" mb="2">However, we understand that certain situations may warrant a refund. Our refund policy is structured to address two main types of service offerings: Monthly/Yearly Subscription Plans and Pay-As-You-Go (Usage Credits).</Text>
    </Section>
    <Section mb="6">
      <Heading size="5" mb="2">3. Subscription Plan Refunds</Heading>
      <Text as="p" mb="2"><strong>14-day satisfaction guarantee on new subscription plans:</strong></Text>
      <Text as="p" mb="2">First-Time Subscriptions: If you are a new customer and are unsatisfied with our service for any reason, you may request a full refund within fourteen (14) calendar days of your initial purchase. This guarantee applies only to your first subscription with us and not to subsequent renewals or new plans.</Text>
      <Text as="p" mb="2">Subscription Renewals: Our subscription plans are set to renew automatically to ensure uninterrupted service. We send renewal reminders via email prior to the renewal date.</Text>
      <Text as="p" mb="2">A refund for a renewal charge can be requested within seventy-two (72) hours of the transaction date, provided that the service has not been used in the new subscription period.</Text>
      <Text as="p" mb="2">If any API calls have been made or tokens have been consumed during the new billing cycle, the renewal charge is non-refundable.</Text>
      <Text as="p" mb="2">To cancel your subscription and avoid future charges, you can do so at any time from your account dashboard.</Text>
    </Section>
    <Section mb="6">
      <Heading size="5" mb="2">4. Pay-As-You-Go (Usage Credits) Refunds</Heading>
      <Text as="p" mb="2">Purchases of pre-paid API usage credits are generally non-refundable.</Text>
      <Text as="p" mb="2">These credits represent a direct, real-time cost for us with our upstream LLM providers. Once credits are purchased and added to your account, they are considered final. Unused credits do not expire as long as your account remains active.</Text>
    </Section>
    <Section mb="6">
      <Heading size="5" mb="2">5. Exceptions</Heading>
      <Text as="p" mb="2">We may issue refunds on a case-by-case basis under the following exceptional circumstances:</Text>
      <ul style={{ paddingLeft: 20, marginBottom: 8 }}>
        <li><Text as="span"><strong>Major Service Downtime:</strong> If our service is unavailable or unusable for a significant, prolonged period due to an unscheduled outage on our end, you may be eligible for a partial refund or service credit. This does not include scheduled maintenance or issues originating from third-party LLM providers.</Text></li>
        <li><Text as="span"><strong>Billing Errors:</strong> If you have been charged incorrectly due to a technical billing error on our part (e.g., a double charge), we will issue a full refund for the erroneous amount.</Text></li>
      </ul>
      <Text as="p" mb="2">Eligibility for refunds in these cases will be determined at our sole discretion after a thorough investigation.</Text>
    </Section>
    <Section mb="6">
      <Heading size="5" mb="2">6. How to Request a Refund</Heading>
      <Text as="p" mb="2">To request a refund, you must contact our support team within the specified timeframes mentioned in this policy.</Text>
      <Text as="p" mb="2">Send an email to <Link href="mailto:seekgpt.org@gmail.com">seekgpt.org@gmail.com</Link>.</Text>
      <Text as="p" mb="2">Use the subject line: <strong>"Refund Request"</strong>.</Text>
      <Text as="p" mb="2">In the body of the email, please include:</Text>
      <ul style={{ paddingLeft: 20, marginBottom: 8 }}>
        <li><Text as="span">The email address associated with your SeekGPT.org account.</Text></li>
        <li><Text as="span">The transaction ID or invoice number.</Text></li>
        <li><Text as="span">A clear and concise reason for your refund request.</Text></li>
      </ul>
      <Text as="p" mb="2">Our team will review your request and typically respond within 3-5 business days.</Text>
    </Section>
    <Section mb="6">
      <Heading size="5" mb="2">7. Processing Refunds</Heading>
      <Text as="p" mb="2">Once a refund is approved, it will be processed back to the original method of payment within 5-10 business days. Please note that the exact time it takes for the funds to appear in your account may vary depending on your bank or card issuer.</Text>
      <Text as="p" mb="2">If you have any questions about our Return &amp; Refund Policy, please contact us at <Link href="mailto:seekgpt.org@gmail.com">seekgpt.org@gmail.com</Link>.</Text>
    </Section>
  </Container>
);

export default ReturnPolicyData;
