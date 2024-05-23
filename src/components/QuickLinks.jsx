import { Box, Heading, Link, ListItem, OrderedList } from "@chakra-ui/react";
import React from "react";

const QuickLinks = ({ quickLinks }) => {
  return (
    <Box border={"1px solid"} borderColor={""} p="4" my="6" w={{ md: "25%" }}>
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
  );
};

export default QuickLinks;
