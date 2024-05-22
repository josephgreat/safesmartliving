import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Container } from "@chakra-ui/react";
import { Footer, Navbar } from "./components";
import { LandingPage } from "./pages";

function App() {

  return (
    <Container color="textGray" maxW={"unset"} p="0" bg="secondaryGray">
      <Navbar />
      <LandingPage />
      <Footer />
    </Container>
  );
}

export default App;
