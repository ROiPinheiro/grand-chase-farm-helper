import "./App.css";
import "../../index.css";
import CharacterList from "./components/character_list";
import FormFarmPlace from "./components/form_farm_place";
import DailyFarmList from "./components/daily_farm_list";
import { useCharactersStore } from "../../store/character-store";
import { Button } from "@chakra-ui/react";

function App() {
  const { hardReset } = useCharactersStore();

  return (
    <div className="flex">
      <aside className="bg-slate-800 text-white p-2 flex-shrink-0 w-64 h-screen ">
        <h2 className="text-lg">Grand Chase Farm Helper</h2>
        <ul className="pt-4">
          <li className="pb-2">
            <Button size={"sm"} width={"full"}>
              Characters
            </Button>
          </li>
          <li>
            <Button size={"sm"} width={"full"}>
              Options
            </Button>
          </li>
        </ul>
      </aside>
      <main className="p-6">
        <div>
          <CharacterList />

          <Button colorScheme="red" onClick={hardReset}>
            HARD RESET
          </Button>
        </div>

        <FormFarmPlace />
        <DailyFarmList />
      </main>
    </div>
  );
}

export default App;
