import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import CharacterSelectionPage from "../pages/CharacterSelection";
import App from "../pages/App";
import OptionsPage from "../pages/Options";
import Home from "../pages/Home";
// import FarmPlacesPage from "../pages/FarmPlaces";
import HelperLinksPage from "../pages/HelperLinks";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="options" element={<OptionsPage />} />
      <Route path="character-selection" element={<CharacterSelectionPage />} />
      {/* <Route path="places" element={<FarmPlacesPage />} /> */}
      <Route path="helper-links" element={<HelperLinksPage />} />
    </Route>
  )
);
