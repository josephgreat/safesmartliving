import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container, VStack } from "@chakra-ui/react";

const PageWrapper = ({ Component }) => {
  return (
    <Container  minH={"100vh"} color="textGray" maxW={"unset"} p="0" bg="secondaryGray">

      <Navbar />
      <Component />
      <Footer />
    </Container>
  );
};

export default PageWrapper;
