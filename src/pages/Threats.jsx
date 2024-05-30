import {
  Box,
  Container,
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
    BestPractices,
  CaseStudies,
  Introduction,
  Steps,
  ToolsAndTechniques,
} from "../components/threats";
import { QuickLinks } from "../components";

const Threats = () => {
  const quickLinks = [
    { title: "Introduction to Threat Modeling", link: "#intro" },
    { title: "Steps in the Threat Modeling Process", link: "#steps" },
    { title: "Tools and Techniques", link: "#tools" },
    { title: "Case Studies/Examples", link: "#cases" },
    { title: "Best Practices", link: "#practices" },
    { title: "Resources and Further Reading", link: "#resources" },
  ];
  return (
    <Box>
      <Container maxW="unset" m="0" p="4" pos="relative" overflow={"hidden"}>
        <Box
          bg="url(/images/threats.jpg) no-repeat center #003366"
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
            textShadow={"0 0 10px black"}
            fontSize={"clamp(2rem, 10vw, 2.5rem)"}
          >
            Threat Modeling
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
          <Steps />
          <ToolsAndTechniques />
          <CaseStudies />
          <BestPractices />
        </Box>
      </Flex>
    </Box>
  );
};

export default Threats;
