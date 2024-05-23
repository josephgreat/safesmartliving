import React from "react";
import { Box, Divider, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import H4Heading from "../H4Heading";

function Introduction() {
  return (
    <Box py="6" id="intro">
      <H4Heading text="Introduction" />

      <Heading as="h4" size="md" mb="4">
        What is Threat Modeling?
      </Heading>

      <Text mb="4">
        Threat modeling is a structured approach to identifying and assessing
        potential security threats to your IoT-based smart home. It involves
        understanding how an attacker might exploit vulnerabilities in your
        smart devices and developing strategies to mitigate these risks. This
        process is crucial for enhancing the security of IoT devices, which are
        often targeted due to their connectivity and accessibility.
      </Text>

      <Heading as="h4" size="md" mb="4">
        What is Threat Modeling?
      </Heading>
      <UnorderedList>
        <ListItem>Identify vulnerabilities in your smart home setup.</ListItem>
        <ListItem>
          Understand the potential impact of these vulnerabilities.
        </ListItem>
        <ListItem>
          Implement measures to protect your home and personal data.
        </ListItem>
      </UnorderedList>
    </Box>
  );
}

export default Introduction;
