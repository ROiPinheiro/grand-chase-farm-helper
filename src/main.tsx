import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./pages/home/App";
import "./index.css";

import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
