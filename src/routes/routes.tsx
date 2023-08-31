/* eslint-disable react-refresh/only-export-components */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import React from "react";

const App = React.lazy(() => import("../pages/App"));
const CharacterSelectionPage = React.lazy(
  () => import("../pages/CharacterSelection")
);
const OptionsPage = React.lazy(() => import("../pages/Options"));
const Home = React.lazy(() => import("../pages/Home"));
const UsefulLinksPage = React.lazy(() => import("../pages/UsefulLinks"));
const FarmPlacesPage = React.lazy(() => import("../pages/FarmPlaces"));
const NotFoundPage = React.lazy(() => import("../pages/NotFound"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="options" element={<OptionsPage />} />
      <Route path="characters" element={<CharacterSelectionPage />} />
      <Route path="dailies" element={<FarmPlacesPage />} />
      <Route path="helper-links" element={<UsefulLinksPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
