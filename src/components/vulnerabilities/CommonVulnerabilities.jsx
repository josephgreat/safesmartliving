import React from "react";
import { Box, Heading, UnorderedList, ListItem, Text } from "@chakra-ui/react";
import { FaLink } from "react-icons/fa6";
import H4Heading from "../H4Heading";

const CommonVulnerabilities = () => {
  const commonVulnerabilities = [
    {
      name: "Default Credentials",
      description:
        "Many smart devices come with default usernames and passwords, making them susceptible to unauthorized access.",
      mitigation:
        "Encourage users to change default credentials to strong, unique passwords during device setup.",
    },
    {
      name: "Lack of Encryption",
      description:
        "Some IoT devices transmit data over the network without encryption, leaving them vulnerable to interception.",
      mitigation:
        "Recommend using devices that support encryption protocols for secure communication.",
    },
    {
      name: "Lack of Software Updates",
      description:
        "Manufacturers may not provide regular software updates for IoT devices, leaving them vulnerable to known security flaws.",
      mitigation:
        "Advise users to choose devices from reputable manufacturers that provide regular firmware updates.",
    },
    {
      name: "Insecure Network Configuration",
      description:
        "Improperly configured Wi-Fi networks or insecure network settings on IoT devices can expose them to external threats.",
      mitigation:
        "Encourage users to secure their home Wi-Fi network with strong passwords and enable network encryption.",
    },
    {
      name: "Lack of User Authentication",
      description:
        "Some smart devices lack proper user authentication mechanisms, allowing unauthorized users to access and control them remotely.",
      mitigation:
        "Recommend enabling strong authentication methods such as two-factor authentication (2FA) or biometric authentication where available.",
    },
  ];

  return (
    <Box py="6" id="common_vulnerabilities">
      <H4Heading text="Common Vulnerabilities" />
      <Text mb="2">
        Understanding the common vulnerabilities found in smart IoT devices is
        essential for ensuring the security of home networks. Here are some of
        the most prevalent vulnerabilities:
      </Text>
      <UnorderedList>
        {commonVulnerabilities.map(
          ({ name, description, mitigation }, index) => (
            <ListItem key={index} mb="4">
              <Text fontWeight={"bold"} fontSize={"1.2rem"} mb="2">{name}</Text>
              <Text>
                <strong>Description:</strong> {description}
              </Text>
              <Text>
                <strong>Mitigation:</strong> {mitigation}
              </Text>
            </ListItem>
          )
        )}
      </UnorderedList>
    </Box>
  );
};

export default CommonVulnerabilities;
