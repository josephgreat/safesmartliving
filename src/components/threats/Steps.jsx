import React from "react";
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { FaHandPointRight } from "react-icons/fa";
import H4Heading from "../H4Heading";

function Steps() {
  const threatModelingProcess = [
    {
      step: "Identify Assets",
      description:
        "Identify valuable assets within your smart home that need protection. These can include:",
      substeps: [
        {
          title: "Personal Data",
          description:
            "Sensitive information such as financial details, personal identity information, and private communications.",
        },
        {
          title: "IoT Devices",
          description:
            "Smart locks, cameras, thermostats, lighting systems, and other connected devices.",
        },
        {
          title: "Network Infrastructure",
          description:
            "Routers, Wi-Fi networks, and hubs that connect all IoT devices.",
        },
      ],
    },
    {
      step: "Create an Architecture Overview",
      description:
        "Understand the architecture of your smart home system by mapping out all connected devices and their interactions. This involves:",
      substeps: [
        {
          title: "Device Inventory",
          description: "Listing all IoT devices and their specifications.",
        },
        {
          title: "Network Map",
          description:
            "Diagramming how devices are connected to each other and to the internet.",
        },
        {
          title: "Data Flow",
          description:
            "Tracking how data moves between devices and external servers.",
        },
      ],
    },
    {
      step: "Identify Threats",
      description:
        "Use threat modeling frameworks like STRIDE to identify potential threats:",
      substeps: [
        {
          title: "Spoofing",
          description:
            "An attacker impersonates a device or user to gain unauthorized access.",
        },
        {
          title: "Tampering",
          description: "Modifying device settings or data to cause disruption.",
        },
        {
          title: "Repudiation",
          description:
            "Performing actions that cannot be traced back to the attacker.",
        },
        {
          title: "Information Disclosure",
          description: "Unauthorized access to sensitive data.",
        },
        {
          title: "Denial of Service (DoS)",
          description: "Disrupting the normal functioning of devices.",
        },
        {
          title: "Elevation of Privilege",
          description: "Gaining higher access rights than permitted.",
        },
      ],
    },
    {
      step: "Mitigate Threats",
      description:
        "Implement measures to mitigate identified threats. Examples include:",
      substeps: [
        {
          title: "Encryption",
          description:
            "Secure communication between devices using encryption protocols.",
        },
        {
          title: "Authentication",
          description:
            "Use strong, unique passwords and multi-factor authentication.",
        },
        {
          title: "Regular Updates",
          description:
            "Keep all devices updated with the latest firmware and software patches.",
        },
        {
          title: "Network Segmentation",
          description:
            "Separate IoT devices from other networked systems to limit access.",
        },
      ],
    },
    {
      step: "Validate the Threat Model",
      description: "Review and validate your threat model regularly:",
      substeps: [
        {
          title: "Expert Review",
          description:
            "Have security experts review the model for completeness and accuracy.",
        },
        {
          title: "Penetration Testing",
          description:
            "Conduct tests to simulate attacks and identify weaknesses.",
        },
        {
          title: "Continuous Monitoring",
          description:
            "Regularly update the threat model to account for new devices and emerging threats.",
        },
      ],
    },
  ];

  return (
    <Box py="6" id="steps">
      <H4Heading text="Steps in the Threat Modeling Process" />
      
      <Accordion defaultIndex={[0]} allowMultiple>
        {/* <List spacing="4"> */}

        {threatModelingProcess.map(({ step, substeps, description }, index) => (
          <AccordionItem key={index}>
            <AccordionButton>
              <Heading fontSize={"md"} as="span" flex="1" textAlign="left">
                #{index + 1} {step}
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Box>
                <Text>{description}</Text>
                <List>
                  {substeps.map(({ title, description }, index) => (
                    <ListItem key={index} display={"flex"} gap="2">
                      <ListIcon mt="2" color="primaryTeal">
                        <FaHandPointRight />
                      </ListIcon>
                      <Text>
                        <strong>{title}:</strong> {description}
                      </Text>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        ))}
        {/* </List> */}
      </Accordion>
    </Box>
  );
}

export default Steps;
