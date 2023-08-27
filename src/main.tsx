import "./i18n/config";
import "./index.css";

import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

import { createStandaloneToast } from "@chakra-ui/react";

const { ToastContainer } = createStandaloneToast();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <React.Suspense fallback={<div>Loading...</div>}>
      <ChakraProvider
        toastOptions={{ defaultOptions: { position: "top-right" } }}
      >
        <RouterProvider router={router} />
        <ToastContainer />
      </ChakraProvider>
    </React.Suspense>
  </React.StrictMode>
);
