import React from "react";
import { Box, Heading, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaHandPointRight } from "react-icons/fa";

function ToolsAndTechniques() {
  const popularThreatModelingTools = [
    {
      name: "Microsoft Threat Modeling Tool",
      description:
        "A user-friendly tool that helps identify and mitigate potential security issues.",
    },
    {
      name: "OWASP Threat Dragon",
      description:
        "An open-source tool for creating threat models and integrating security into your development process.",
    },
    {
      name: "ThreatModeler",
      description:
        "A comprehensive tool that automates threat modeling and integrates with DevOps processes.",
    },
  ];

  return (
    <Box py="6" id="tools">
      <Heading as="h2" size="lg" mb="4">
        Tools and Techniques
      </Heading>
      <Heading as="h4" size={"md"} mb="4">
        Popular Threat Modeling Tools:
      </Heading>
      <List spacing="4">
        {popularThreatModelingTools.map(({ name, description }, index) => (
          <ListItem display="flex" gap="2" key={index}>
            <ListIcon color={"primaryTeal"} mt="4">
              <FaHandPointRight />
            </ListIcon>
            <Text>
              <strong>{name}</strong> {description}
            </Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default ToolsAndTechniques;
