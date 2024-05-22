import {
  Box,
  Container,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaListAlt, FaShieldAlt } from "react-icons/fa";
import {
  FaBookOpen,
  FaClipboardCheck,
  FaLock,
  FaToolbox,
} from "react-icons/fa6";

const safeSmartLivingContent = [
  {
    title: "Introduction to Threat Modeling",
    icon: <FaLock />,
    color: "#008080",
    description:
      "Understand the basics of threat modeling and its importance for IoT-based smart homes.",
  },
  {
    title: "Step-by-Step Guides",
    icon: <FaListAlt />,
    color: "#003366",
    description:
      "Detailed guides on identifying assets, creating architecture overviews, identifying threats, mitigating risks, and validating threat models.",
  },
  {
    title: "Tools and Techniques",
    icon: <FaToolbox />,
    color: "#66CCCC",
    description:
      "Explore popular threat modeling tools and learn how to use them effectively.",
  },
  {
    title: "Case Studies",
    icon: <FaClipboardCheck />,
    color: "#FF6600",
    description:
      "Real-world examples and scenarios to help you understand and apply threat modeling in your own home.",
  },
  {
    title: "Best Practices",
    icon: <FaShieldAlt />,
    color: "#00CC66",
    description:
      "Learn about the best practices for maintaining smart home security, including regular updates, strong authentication, and continuous monitoring.",
  },
  {
    title: "Resources and Further Reading",
    icon: <FaBookOpen />,
    color: "#333333",
    description:
      "Access books, online courses, articles, and papers to deepen your understanding of smart home security.",
  },
];

const WhatToFind = () => {
  return (
    <Container maxW={"unset"} mx="0" bg="white" shadow="lg">
      <Box maxW={"72rem"} mx="auto" py="8" >
        <Heading
          textAlign={"center"}
          as="h3"
          mb="4"
          fontSize={"clamp(1.3rem, 4vw, 1.5rem)"}
        >
          What You'll Find on SafeSmartLiving
        </Heading>
        <List
          as={HStack}
          flexWrap={"wrap"}
          gap="6"
          justifyContent={{ base: "center", md: "space-between" }}
        >
          {safeSmartLivingContent.map(
            ({ title, description, icon, color }, index) => (
              <ListItem key={index} as={VStack} w={{ base: "90%", md: "30%" }}>
                <ListIcon
                  color={color}
                  bg="secondaryGray"
                  w="3rem"
                  h="3rem"
                  rounded="full"
                  shadow={"lg"}
                  p="2"
                  display={"flex"}
                  fontSize={"1.5rem"}
                  mb="2"
                >
                  {icon}
                </ListIcon>
                <Heading as="h5" fontSize={"1rem"}>
                  {title}
                </Heading>
                <Text textAlign={"center"}>{description}</Text>
              </ListItem>
            )
          )}
        </List>
      </Box>
    </Container>
  );
};

export default WhatToFind;
