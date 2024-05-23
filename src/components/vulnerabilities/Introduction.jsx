import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import H4Heading from "../H4Heading";

const Introduction = () => {
  return (
    <Box py="6" id="intro">
      <H4Heading text="Introduction" />
      <Text>
        In today's interconnected world, smart IoT devices play a significant
        role in our daily lives, offering convenience and automation. However,
        with the proliferation of these devices, comes an increased risk of
        security vulnerabilities that can compromise the privacy and security of
        our homes. Conducting regular vulnerability assessments is crucial to
        identify and address these vulnerabilities effectively.
      </Text>
    </Box>
  );
};

export default Introduction;
