import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Container bg="primaryBlue" color={"textWhite"} maxW="unset" m="0">
      <Box mx="auto" maxW="72rem" p="4" textAlign={"center"}>
        <Text>
          Welcome to SafeSmartLiving, where your smart home security starts.
        </Text>
        <Text>&copy; 2024 SmartHomeSec. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Footer;
