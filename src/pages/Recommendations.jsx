import React from "react";
import {
  Box,
  Heading,
  UnorderedList,
  ListItem,
  Text,
  Flex,
  Container,
  VStack,
} from "@chakra-ui/react";
import { H4Heading, QuickLinks } from "../components";

const recommendations = [
  {
    title: "Strong Passwords and Authentication",
    description:
      "Use strong, unique passwords for all devices. Enable multi-factor authentication (MFA) where available.",
  },
  {
    title: "Regular Updates",
    description:
      "Ensure all devices are running the latest firmware and software updates. Set devices to update automatically if possible.",
  },
  {
    title: "Secure Network Configuration",
    description:
      "Use a strong, unique password for your Wi-Fi network. Enable WPA3 encryption for your Wi-Fi network if supported.",
  },
  {
    title: "Device Management",
    description:
      "Disable unused features and services on IoT devices. Regularly review and remove unused devices from the network.",
  },
];

const actionPlans = [
  {
    title: "Device Setup and Configuration",
    description:
      "Change default credentials during initial device setup. Configure device privacy settings to limit data sharing.",
  },
  {
    title: "Network Segmentation",
    description:
      "Use a guest network for IoT devices to isolate them from personal and sensitive devices.",
  },
  {
    title: "Monitoring and Alerts",
    description:
      "Set up network monitoring tools to detect unusual activities. Enable alerts for login attempts and other security-related events.",
  },
  {
    title: "Data Privacy",
    description:
      "Limit the amount of personal information shared with IoT device manufacturers. Regularly review and adjust data sharing settings on each device.",
  },
  {
    title: "Physical Security",
    description:
      "Place devices in secure locations to prevent physical tampering. Consider using devices with tamper-evident features.",
  },
];

const quickLinks = [
  { title: "General Recommendations", link: "#recommendations" },
  { title: "Action Plans", link: "#actionplans" },
];
const Recommendations = () => {
  return (
    <Box>
      <Container maxW="unset" m="0" p="4" pos="relative" overflow={"hidden"}>
        <Box
          bg="url(/images/recommendations.jpg) no-repeat center #003366"
          filter={"brightness(.5) "}
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
            textShadow={"0 0 10px black"}
          >
            Recommendations and Action Plans
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
          <Box py="6" id="recommendations">
            <H4Heading text="General Recommendations" />
            <UnorderedList>
              {recommendations.map((rec, index) => (
                <ListItem key={index}>
                  <Text as="strong">{rec.title}:</Text> {rec.description}
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
          <Box py="6" id="actionplans">
            <H4Heading text={"Specific Action Plans"} />
            <UnorderedList>
              {actionPlans.map((plan, index) => (
                <ListItem key={index}>
                  <Text as="strong">{plan.title}:</Text> {plan.description}
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Recommendations;
