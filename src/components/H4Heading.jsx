import { Heading } from "@chakra-ui/react";
import React from "react";
import { FaLink } from "react-icons/fa";

const H4Heading = ({ text }) => {
  return (
    <Heading
      display={"flex"}
      alignItems={"center"}
      gap="2"
      as="h2"
      size="lg"
      mb="4"
    >
      <FaLink /> {text}
    </Heading>
  );
};

export default H4Heading;
