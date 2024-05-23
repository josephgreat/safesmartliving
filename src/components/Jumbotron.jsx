import { Box, Container, Flex, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";

const Jumbotron = () => {
  return (
    <Container
      color="textWhite"
      maxW="unset"
      p="4"
      pos="relative"
      mb="8"
      overflow={"hidden"}
      backdropFilter={"blur(5px)"}
    >
      <Box
        bg={"url('/images/smarthomebg.jpeg') no-repeat center #003366 "}
        bgSize={"cover"}
        // opacity={".4"}
        pos="absolute"
        inset="-1"
        filter={"brightness(.3) blur(3px)"}
      ></Box>
      <Flex
        pos="relative"
        py="8"
        maxW="72rem"
        mx="auto"
        justifyContent={"space-around"}
        alignItems={"center"}
        flexDir={{ base: "column", md: "row" }}
      >
        <Box w={{ base: "100%", md: "40%" }}>
          <Heading as="h2" mb="4" fontSize={"clamp(1.5rem, 5vw, 1.7rem)"}>
            Living a Smart Safe Life
          </Heading>
          <Text mb="12" opacity={".7"}>
            Your trusted source for securing IoT-based smart homes.
          </Text>
          <Text>
            Discover how to protect your smart home from cyber threats through
            comprehensive threat modeling and vulnerability assessments. Learn
            best practices, explore tools, and stay updated with the latest in
            smart home security.
          </Text>
        </Box>
        <Box w={{ md: "30%" }} display={{ base: "none", md: "block" }}>
          <Img src="/images/smarthome.png" alt="smarthome image" />
        </Box>
      </Flex>
    </Container>
  );
};

export default Jumbotron;
