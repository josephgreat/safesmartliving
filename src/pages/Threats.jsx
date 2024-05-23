import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  OrderedList,
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
          bg="url(/images/threats.jpg) no-repeat center"
          filter={"brightness(.5) blur(3px)"}
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
        <Box
          border={"1px solid"}
          borderColor={""}
          p="4"
          my="6"
          w={{ md: "25%" }}
        >
          <Heading as="h4" fontSize={"1.3rem"} mb="4">
            Quick Links
          </Heading>
          <OrderedList>
            {quickLinks.map(({ title, link }, index) => (
              <ListItem key={index}>
                <Link href={link} color="primaryTeal">
                  {title}
                </Link>
              </ListItem>
            ))}
          </OrderedList>
        </Box>
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
