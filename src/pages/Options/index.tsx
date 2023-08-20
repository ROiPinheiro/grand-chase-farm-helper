import { Button, useColorMode } from "@chakra-ui/react";
import PageContent from "../../components/PageContent";
import PageHeader from "../../components/PageHeader";
import { useCharactersStore } from "../../store/character-store";
import { usePlacesToFarmStore } from "../../store/places-to-farm-store";

export default function OptionsPage() {
  const { hardReset } = usePlacesToFarmStore();
  const { toggleColorMode } = useColorMode();
  const { hardReset: hardResetCharacters } = useCharactersStore();

  return (
    <PageContent>
      <PageHeader text="Options" />

      <div className="flex flex-col w-72 gap-2">
        <Button colorScheme="red" onClick={hardReset}>
          Hard reset places to farm
        </Button>

        <Button onClick={toggleColorMode}>Toggle dark mode</Button>

        <Button colorScheme="red" onClick={hardResetCharacters}>
          HARD RESET CHARACTER LIST
        </Button>
      </div>
    </PageContent>
  );
}
