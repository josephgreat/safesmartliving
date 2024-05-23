import React from "react";
import { Box, Heading, UnorderedList, ListItem, Text } from "@chakra-ui/react";
import H4Heading from "../H4Heading";

const BestPractices = () => {
  const bestPractices = [
    {
      title: "Regular Updates",
      description:
        "Keep device firmware and software updated to address known security vulnerabilities.",
    },
    {
      title: "User Education",
      description:
        "Educate household members about security practices and the importance of maintaining device security.",
    },
    {
      title: "Network Monitoring",
      description:
        "Monitor network traffic for suspicious activity and anomalies.",
    },
    {
      title: "Cross-Functional Team",
      description:
        "Involve stakeholders from different disciplines in the vulnerability assessment process for comprehensive coverage.",
    },
    {
      title: "Continuous Improvement",
      description:
        "Establish a process for ongoing vulnerability management and remediation to adapt to evolving threats.",
    },
  ];

  return (
    <Box py="6" id="practices">
      <H4Heading text="Best Practices" />
      <Text mb="2">
        Here are some best practices for securing smart IoT devices and
        conducting effective vulnerability assessments:
      </Text>
      <UnorderedList>
        {bestPractices.map(({ title, description }, index) => (
          <ListItem key={index} mb="4">
            <Text fontWeight={"bold"} fontSize={"1.2rem"} mb="2">
              {title}
            </Text>
            <Text>
              <strong>Description:</strong> {description}
            </Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default BestPractices;
