import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import CharacterSelectionPage from "../pages/CharacterSelection";
import App from "../pages/App";
import OptionsPage from "../pages/Options";
import Home from "../pages/Home";
import UsefulLinksPage from "../pages/UsefulLinks";
import FarmPlacesPage from "../pages/FarmPlaces";
import NotFoundPage from "../pages/NotFound";

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
