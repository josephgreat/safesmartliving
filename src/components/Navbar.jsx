import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  IconButton,
  Img,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaHamburger, FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);
  return (
    <Container
      pos="relative"
      bg={"primaryBlue"}
      maxW={"unset"}
      color={"textWhite"}
      m="0"
      p="4"
    >
      <Flex
        justifyContent={"space-between"}
        maxW="72rem"
        mx="auto"
        alignItems={"center"}
      >
        <Link as={NavLink} to="/" display={"flex"} gap="2" alignItems="center">
          <Img maxW="2.5rem" src="/images/logo.jpg" alt="logo" />
          <Heading as="h1" fontSize={"clamp(1.2rem, 3vw, 1.4rem)"}>
            SafeSmartLiving
          </Heading>
        </Link>
        <IconButton
          _hover={{ bg: "transparent" }}
          onClick={() => setOpenLinks(!openLinks)}
          bg="transparent"
          color={"secondaryGray"}
          display={{ base: "flex", md: "none" }}
        >
          {openLinks ? <FaTimes /> : <FaBars />}
        </IconButton>
        <Flex
          pos={{ base: "absolute", md: "relative" }}
          top={{ base: "100%", md: "unset" }}
          right={"0"}
          bg={{ base: "primaryBlue", md: "unset" }}
          gap="4"
          overflow={"hidden"}
          zIndex={20}
          flexDir={{ base: "column", md: "row" }}
          alignItems={{ base: "flex-start" }}
          p={{ base: "4", md: "unset" }}
          visibility={{ base: openLinks ? "visible" : "hidden", md: "visible" }}
          transition={"height .3s ease"}
        >
          <Link as={NavLink} onClick={() => setOpenLinks(false)} to="/threats">
            Threats
          </Link>
          <Link
            as={NavLink}
            onClick={() => setOpenLinks(false)}
            to="/vulnerabilities"
          >
            Vulnerabilities
          </Link>
          <Link
            as={NavLink}
            onClick={() => setOpenLinks(false)}
            to="/recommendations"
          >
            Recommendations
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
