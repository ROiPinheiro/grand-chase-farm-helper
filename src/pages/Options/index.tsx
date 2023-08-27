import { Button, Divider } from "@chakra-ui/react";

import PageContent from "../../components/PageContent";
import PageHeader from "../../components/PageHeader";
import { useCharactersStore } from "../../store/character-store";
import { usePlacesToFarmStore } from "../../store/PlacesToFarmStore";
import LanguageSelector from "./components/LanguageSelector";

export default function OptionsPage() {
  const { hardReset } = usePlacesToFarmStore();

  const { hardReset: hardResetCharacters } = useCharactersStore();

  return (
    <PageContent>
      <PageHeader text="Options" />

      <div className="flex flex-col w-72 gap-2">
        <Button colorScheme="red" onClick={hardReset}>
          Hard reset places to farm
        </Button>

        <Button colorScheme="red" onClick={hardResetCharacters}>
          HARD RESET CHARACTER LIST
        </Button>
        <Divider className="mt-4 mb-4" />

        <LanguageSelector />
      </div>
    </PageContent>
  );
}
