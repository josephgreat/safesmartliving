import React from "react";
import { Box, Heading, ListItem, OrderedList, Text } from "@chakra-ui/react";
import H4Heading from "../H4Heading";

function CaseStudies() {
  const caseStudies = [
    {
      title: "Case Study 1: Securing a Smart Home with Multiple Devices",
      scenario:
        "A smart home with devices including smart locks, cameras, and thermostats.",
      steps: [
        {
          step: "Identify Assets",
          description:
            "Personal data, access control systems, and surveillance feeds.",
        },
        {
          step: "Architecture Overview",
          description: "Diagram showing device connectivity and data flow.",
        },
        {
          step: "Identify Threats",
          description:
            "Spoofing of the smart lock, tampering with camera feeds, DoS attack on the thermostat.",
        },
        {
          step: "Mitigate Threats",
          description:
            "Implement strong passwords, enable two-factor authentication, and regularly update firmware.",
        },
        {
          step: "Validation",
          description:
            "Conduct penetration testing and review the threat model quarterly.",
        },
      ],
    },
    {
      title: "Case Study 2: Mitigating Risks in a Smart Lighting System",
      scenario: "A smart home with an integrated smart lighting system.",
      steps: [
        {
          step: "Identify Assets",
          description:
            "Lighting control data, user preferences, and schedules.",
        },
        {
          step: "Architecture Overview",
          description:
            "Diagram showing connectivity between the lighting system, mobile app, and cloud service.",
        },
        {
          step: "Identify Threats",
          description:
            "Information disclosure through unencrypted data, tampering with lighting schedules, DoS attack on the control system.",
        },
        {
          step: "Mitigate Threats",
          description:
            "Use encrypted communication, set up secure user authentication, and implement redundancy.",
        },
        {
          step: "Validation",
          description:
            "Regularly review security logs and update threat model biannually.",
        },
      ],
    },
  ];

  return (
    <Box py="6" id="cases">
      <H4Heading text="Case Studies / Examples" />
      {caseStudies.map(({ title, scenario, steps }, index) => (
        <Box mb="6" key={index}>
          <Heading as="h3" size="md" mb="2">
            {title}
          </Heading>
          <Text mb="2">
            <strong>Scenario:</strong> {scenario}
          </Text>
          <Text mb="2">
            <strong>Threat Modeling Process:</strong>
          </Text>
          <OrderedList display={"flex"} flexDir={"column"} gap="4">
            {steps.map(({ step, description }, index) => (
              <ListItem key={index}>
                <Text fontWeight={"semibold"}>{step}:</Text>
                <Text>{description}</Text>
              </ListItem>
            ))}
          </OrderedList>
        </Box>
      ))}
    </Box>
  );
}

export default CaseStudies;
