import { Box, Container, Divider, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Jumbotron, WhatToFind } from "../components";

const LandingPage = () => {
  return (
    <Box>
      <Jumbotron />
      <Container p="4" maxW="72rem" mx="auto" textAlign={"center"}>
        <Box mb="8">
          <Heading as="h3" mb="4" fontSize={"clamp(1.3rem, 4vw, 1.5rem)"}>
            Why Smart Home Security Matters
          </Heading>
          <Text>
            With the rise of IoT devices, our homes are becoming smarter but
            also more vulnerable to cyber-attacks. At SafeSmartLiving, we
            provide the knowledge and resources you need to safeguard your home
            and personal data.
          </Text>
        </Box>
        
      </Container>
      <WhatToFind />
      <Container p="4" maxW="unset" m="0" textAlign={"center"}>
        <Box my="8" maxW="72rem" mx="auto">
          <Heading as="h3" mb="4" fontSize={"clamp(1.3rem, 4vw, 1.5rem)"}>
            Join Our Community
          </Heading>
          <Text>
            Stay updated with the latest news, tips, and best practices by
            joining the SafeSmartLiving community. Subscribe to our newsletter
            and follow us on social media to stay informed and connected.
          </Text>
        </Box>
      </Container>
      <Divider
          w="min(60%, 70rem)"
          mx="auto"
          orientation="horizontal"
          h="5px"
          borderColor="primaryBlue"
        />
      <Container p="4" maxW="unset" m="0" textAlign={"center"}>
        <Box my="8" maxW="72rem" mx="auto">
          <Heading as="h3" mb="4" fontSize={"clamp(1.3rem, 4vw, 1.5rem)"}>
            Contact Us
          </Heading>
          <Text>
            Have questions or need assistance? Reach out to us through our
            contact page. We're here to help you secure your smart home.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;
