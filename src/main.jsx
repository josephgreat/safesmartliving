import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primaryBlue: "#003366",
    primaryTeal: "#008080",
    secondaryTeal: "#66CCCC",
    secondaryGray: "#F0F0F0",
    textGray: "#333333",
    textWhite: "#FFFFFF",
    accentOrange: "#FF6600",
    accentGreen: "#00CC66",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
