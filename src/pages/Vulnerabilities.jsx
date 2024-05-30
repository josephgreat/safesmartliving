import { Box, Container, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import {
  BestPractices,
  CommonVulnerabilities,
  Introduction,
  VulnerabilityAssessment,
} from "../components/vulnerabilities";
import { QuickLinks } from "../components";

const Vulnerabilities = () => {
  const quickLinks = [
    { title: "Introduction", link: "#intro" },
    { title: "Common Vulnerabilities", link: "#common_vulnerabilities" },
    { title: "Vulnerability Assessment", link: "#vulnerability_assessment" },
    { title: "Best Practices", link: "#practices" },
  ];
  return (
    <Box>
      <Container maxW="unset" m="0" p="4" pos="relative" overflow={"hidden"}>
        <Box
          bg="url(/images/vulnerabilities.webp) no-repeat center #003366"
          filter={"brightness(.5)"}
          bgSize="cover"
          pos="absolute"
          inset="-1"
        />
        <Box
          maxW="68rem"
          mx="auto"
          minH="60vh"
          as={VStack}
          justifyContent={"center"}
        >
          <Heading
            pos="relative"
            color={"textWhite"}
            as="h2"
            mb="4"
            fontSize={"clamp(1.6rem, 9vw, 2.3rem)"}
            textAlign={"center"}
            textShadow={"0 0 10px black"}
          >
            Vulnerability Assessment and Common Vulnerabilities in Smart IoT
            Devices at Home
          </Heading>
        </Box>
      </Container>
      <Flex
        maxW="72rem"
        p="4"
        py="6"
        mx="auto"
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap="4"
        alignItems={"flex-start"}
      >
        <QuickLinks quickLinks={quickLinks} />
        <Box w={{ md: "70%" }} maxH={{ md: "100vh" }} overflow={{ md: "auto" }}>
          <Introduction />
          <CommonVulnerabilities />
          <VulnerabilityAssessment />
          <BestPractices />
        </Box>
      </Flex>
    </Box>
  );
};

export default Vulnerabilities;
