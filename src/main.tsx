import "./i18n/config";
import "./index.css";

import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

import { createStandaloneToast } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";

const { ToastContainer } = createStandaloneToast();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<div>Erro </div>}>
      <ChakraProvider
        toastOptions={{ defaultOptions: { position: "top-right" } }}
      >
        <RouterProvider router={router} />
        <ToastContainer />
      </ChakraProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
