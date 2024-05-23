import React from "react";
import { Box, Heading, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaHandPointRight } from "react-icons/fa";
import H4Heading from "../H4Heading";

function BestPractices() {
  const bestPractices = [
    {
      title: "Involve a Cross-Functional Team",
      description:
        "Include stakeholders from different disciplines (IT, security, development, and operations) in the threat modeling process.",
    },
    {
      title: "Regular Updates",
      description:
        "Keep your threat model updated to reflect new devices, updates, and emerging threats.",
    },
    {
      title: "Integrate with Development Lifecycle",
      description:
        "Make threat modeling a part of your smart home device development and deployment process.",
    },
    {
      title: "Educate Users",
      description:
        "Ensure that all household members are aware of security practices and the importance of maintaining device security.",
    },
    {
      title: "Monitor Continuously",
      description:
        "Implement continuous monitoring to detect and respond to threats in real-time.",
    },
  ];

  return (
    <Box py="6" id="practices">
      <H4Heading text="Best Practices" />
      <List spacing="4">
        {bestPractices.map(({ title, description }, index) => (
          <ListItem display={"flex"} gap="2" key={index}>
            <ListIcon color="primaryTeal" mt="4">
              <FaHandPointRight />
            </ListIcon>
            <Text>
              <strong>{title}</strong> {description}
            </Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default BestPractices;
