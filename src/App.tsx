import "./App.css";
import "./index.css";
import CharacterList from "./components/character_list";
import FormFarmPlace from "./components/form_farm_place";
import DailyFarmList from "./components/daily_farm_list";
import { useCharactersStore } from "./store/character-store";
import { Button } from "@chakra-ui/react";

function App() {
  const { hardReset } = useCharactersStore();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
        <div>
          <CharacterList />

          <Button colorScheme="red" onClick={hardReset}>
            HARD RESET
          </Button>
        </div>

        <FormFarmPlace />
        <DailyFarmList />
      </main>
    </>
  );
}

export default App;
