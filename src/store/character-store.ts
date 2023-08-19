import { create } from "zustand";
import { persist } from "zustand/middleware";
import { characters } from "../data/characters";

export interface FarmPlace {
  name: string;
  enabled: boolean;
  completed: boolean;
}

export interface CharactersFarm {
  id: number;
  char: Character;
  selectedFarmPlaces: FarmPlace[];
}

interface CharactersState {
  selectedCharacters: CharactersFarm[];
  increase: (char: CharactersFarm) => void;
  hardReset: () => void;
}

export const useCharactersStore = create<CharactersState>()(
  persist(
    (set, get) => ({
      selectedCharacters: [
        {
          char: characters[3],
          id: 1,
          selectedFarmPlaces: [
            {
              name: "5F",
              completed: true,
              enabled: false,
            },
          ],
        },
      ],
      increase: (char) => {
        return set(() => {
          return { selectedCharacters: [...get().selectedCharacters, char] };
        });
      },
      hardReset() {
        return set(() => {
          return {
            selectedCharacters: [],
          };
        });
      },
    }),
    {
      name: "characters-storage",
    }
  )
);
