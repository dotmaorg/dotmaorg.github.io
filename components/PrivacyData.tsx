

import React from "react";
import { Box, Container, Heading, Text, Card, Section, Link } from "@radix-ui/themes";

const PrivacyData: React.FC = () => (
  <Container size="3" px={{ initial: "4", sm: "6", md: "7" }} py={{ initial: "5", sm: "7" }}>
    <Section mb="6">
      <Heading size="6" align="center" mb="2">Privacy Policy for SeekGPT.org | NarzaryAI</Heading>
      <Text as="p" align="center" size="3" color="gray" mb="2">Effective Date: September 18, 2025</Text>
    </Section>
    <Card variant="surface" mb="6" style={{ background: "#F5F0E8" }}>
      <Box p="4">
        <Heading size="5" mb="2">1. Introduction</Heading>
        <Text as="p" mb="2">At SeekGPT.org | NarzaryAI, we are committed to protecting your privacy. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information when you use our website and services.</Text>
        <Text as="p" mb="2">Welcome to SeekGPT.org ("we," "us," or "our"). We provide a Large Language Model (LLM) Gateway Service (the "Service") that allows users ("you," "your") to access various third-party LLMs through a unified Application Programming Interface (API).</Text>
        <Text as="p" mb="2">This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website SeekGPT.org and use our Service. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our Service.</Text>
        <Text as="p" mb="2">We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Effective Date" of this Privacy Policy.</Text>
      </Box>
    </Card>
    <Section mb="6">
      <Heading size="5" mb="2">2. Information We Collect</Heading>
      <Text as="p" mb="2">We may collect information about you in a variety of ways. The information we may collect via the Service includes:</Text>
      <ul style={{ paddingLeft: 20, marginBottom: 8 }}>
        <li><Text as="span" weight="bold">Account Information:</Text> When you register for an account to receive an API key, we collect information such as your name, email address, company name (optional), and a hashed password.</li>
        <li><Text as="span" weight="bold">Billing Information:</Text> To process payments for using our Service, we collect billing details, which may include your name, address, and payment card information. This information is securely collected and processed by our third-party payment processor (e.g., Stripe, PayPal) and is not stored on our servers.</li>
        <li><Text as="span" weight="bold">Communications:</Text> If you contact us directly for support or other inquiries, we may receive additional information about you such as your name, email address, the contents of the message, and/or attachments you may send us.</li>
        <li><Text as="span" weight="bold">API Request Logs:</Text> When you make a call to our API, we automatically log metadata about the request. This includes your IP address, the API key used, the timestamp of the request, the specific LLM endpoint called, the number of input and output tokens, error codes, and request latency.</li>
        <li><Text as="span" weight="bold">Cookies and Web Beacons:</Text> We may use cookies, web beacons, and other tracking technologies on our website to help customize the site and improve your experience. This is primarily for authentication, session management, and analytics.</li>
        <li><Text as="span" weight="bold">Prompts and Responses:</Text> To provide the Service, we process the content you send to our API (your "Prompts") and the content we receive back from the third-party LLMs ("Responses").</li>
      </ul>
    </Section>
    <Section mb="6">
      <Heading size="5" mb="2">3. How We Use Your Information</Heading>
      <Text as="p" mb="2">Having accurate information permits us to provide you with a smooth, efficient, and customized experience. Specifically, we use information collected about you via the Service to:</Text>
      <ul style={{ paddingLeft: 20, marginBottom: 8 }}>
        <li><Text as="span" weight="bold">Provide, Operate, and Maintain our Service:</Text> Route your Prompts to the designated third-party LLMs and return the Responses to you.</li>
        <li><Text as="span" weight="bold">Manage Your Account:</Text> Create and manage your account, process transactions, and send you related information, including purchase confirmations and invoices.</li>
        <li><Text as="span" weight="bold">Improve and Analyze our Service:</Text> Monitor and analyze usage and trends to improve the functionality and user experience of our Service. We use aggregated and anonymized Usage Data for this purpose.</li>
        <li><Text as="span" weight="bold">Security and Fraud Prevention:</Text> Use your information to detect and prevent fraudulent transactions, abuse, and other harmful activities, and to ensure the security of our platform.</li>
        <li><Text as="span" weight="bold">Communicate with You:</Text> Respond to your comments and questions, provide customer service, and send you technical notices, updates, security alerts, and administrative messages.</li>
        <li><Text as="span" weight="bold">Comply with Law:</Text> Comply with legal obligations, court orders, or other binding legal processes.</li>
      </ul>
      <Text as="p" weight="bold" mb="2">Our Handling of API Content (Prompts and Responses):</Text>
      <ul style={{ paddingLeft: 20, marginBottom: 8 }}>
        <li>Your API Content is your confidential information. Our use of it is limited:</li>
        <li>We <Text as="span" weight="bold">DO NOT</Text> use your Prompts or Responses to train our own models or any third-party models.</li>
        <li>We may temporarily log API Content for a period of up to thirty (30) days for the sole purposes of debugging, monitoring for abuse, and ensuring the quality of our Service. Access to this data is strictly limited to authorized personnel. After this period, it is permanently deleted from our logs.</li>
      </ul>
    </Section>
    <Section mb="6">
      <Heading size="5" mb="2">4. How We Share Your Information</Heading>
      <Text as="p" mb="2">We do not sell your personal information. We may share information we have collected about you in certain situations.</Text>
      <ul style={{ paddingLeft: 20, marginBottom: 8 }}>
        <li><Text as="span" weight="bold">With Third-Party LLM Providers:</Text> The core function of our Service is to act as a gateway. When you make an API call, we transmit your Prompt to the third-party LLM provider you have selected (e.g., OpenAI, Anthropic, Google, etc.). The handling of your Prompt by these providers is governed by their respective privacy policies and terms of service. We encourage you to review them carefully.</li>
        <li><Text as="span" weight="bold">With Service Providers:</Text> We may share your information with third-party vendors, consultants, and other service providers who perform services for us or on our behalf, such as payment processing (e.g., Stripe), cloud infrastructure hosting (e.g., AWS, Google Cloud), and analytics.</li>
        <li><Text as="span" weight="bold">For Legal Reasons and to Protect Rights:</Text> We may disclose your information if we are required to do so by law or in the good faith belief that such action is necessary to (i) comply with a legal obligation, (ii) protect and defend the rights or property of SeekGPT.org, (iii) prevent or investigate possible wrongdoing in connection with the Service, or (iv) protect the personal safety of users of the Service or the public.</li>
        <li><Text as="span" weight="bold">Business Transfers:</Text> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
      </ul>
    </Section>
    <Section mb="6">
      <Heading size="5" mb="2">5. Data Retention</Heading>
      <Text as="p" mb="2">We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy.</Text>
      <ul style={{ paddingLeft: 20, marginBottom: 8 }}>
        <li><Text as="span" weight="bold">Account Information:</Text> We retain your account information for as long as your account is active and for a reasonable period thereafter as necessary to comply with our legal obligations.</li>
        <li><Text as="span" weight="bold">Usage Data:</Text> We may retain usage data for longer periods for internal analysis purposes, security, or to improve the functionality of our Service.</li>
        <li><Text as="span" weight="bold">API Content:</Text> As stated above, API Content is retained in temporary logs for a maximum of 30 days before being deleted.</li>
      </ul>
    </Section>
    <Section mb="6">
      <Heading size="5" mb="2">6. Security of Your Information</Heading>
      <Text as="p" mb="2">We use administrative, technical, and physical security measures to help protect your personal information. This includes using Transport Layer Security (TLS) to encrypt data in transit and encrypting sensitive data at rest. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</Text>
    </Section>
    <Section mb="6">
      <Heading size="5" mb="2">7. Your Data Protection Rights</Heading>
      <Text as="p" mb="2">Depending on your location, you may have the following rights regarding your personal information:</Text>
      <ul style={{ paddingLeft: 20, marginBottom: 8 }}>
        <li><Text as="span" weight="bold">The right to access:</Text> You have the right to request copies of your personal data.</li>
        <li><Text as="span" weight="bold">The right to rectification:</Text> You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
        <li><Text as="span" weight="bold">The right to erasure:</Text> You have the right to request that we erase your personal data, under certain conditions.</li>
        <li><Text as="span" weight="bold">The right to object to processing:</Text> You have the right to object to our processing of your personal data, under certain conditions.</li>
      </ul>
      <Text as="p" mb="2">To exercise these rights, please contact us at the email address provided below. You can typically access and update your account information directly through your account settings dashboard.</Text>
    </Section>
    <Section mb="6">
      <Heading size="5" mb="2">8. Children's Privacy</Heading>
      <Text as="p" mb="2">Our Service is not intended for use by individuals under the age of 13 (or 16 in the European Economic Area). We do not knowingly collect personally identifiable information from children under this age.</Text>
    </Section>
    <Section mb="6">
      <Heading size="5" mb="2">9. Contact Us</Heading>
      <Text as="p" mb="2">If you have questions or comments about this Privacy Policy, please contact us at:</Text>
      <Text as="p" weight="bold" mb="2">SeekGPT.org</Text>
      <Text as="p" mb="2">Email: <Link href="mailto:seekgpt.org@gmail.com">seekgpt.org@gmail.com</Link></Text>
    </Section>
  </Container>
);

export default PrivacyData;
