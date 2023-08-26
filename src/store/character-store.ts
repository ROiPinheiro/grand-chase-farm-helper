import { toast } from "react-toastify";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PlaceToFarm } from "../data/places-to-farm";

export interface FarmPlace extends PlaceToFarm {
  completed?: boolean;
}

export interface CharactersFarm {
  character: Character;
  selectedFarmPlaces: FarmPlace[];
}

interface CharactersState {
  selectedCharacters: CharactersFarm[];
  addCharacter: (character: CharactersFarm) => void;
  checkFarmPlace: (
    character: Character,
    farmPlaceIndex: number,
    value: boolean
  ) => void;
  toggleAllFarmPlaces: (character: Character, value: boolean) => void;

  hardReset: () => void;

  deleteCharacter: (character: Character) => void;
}

const initialState: CharactersFarm[] = [];

export const useCharactersStore = create<CharactersState>()(
  persist(
    (set, get) => ({
      selectedCharacters: initialState,
      addCharacter(char) {
        const actualCharacters = get().selectedCharacters;

        const duplicatedChar = actualCharacters.find(
          (item) => item.character.id == char.character.id
        );

        if (duplicatedChar) {
          toast.error("Character already selected");
          return;
        }

        set({ selectedCharacters: [...actualCharacters, char] });
      },
      checkFarmPlace(character, farmPlaceIndex, value) {
        const actualCharacters = get().selectedCharacters;

        const actualCharIndex = actualCharacters.findIndex(
          (item) => item.character.id == character.id
        );

        if (actualCharIndex == -1) {
          return;
        }

        const actualChar = actualCharacters[actualCharIndex];

        const farmIndex = actualChar.selectedFarmPlaces.findIndex(
          (i) => i.id == farmPlaceIndex
        );

        if (farmIndex == -1) {
          return;
        }

        actualChar.selectedFarmPlaces[farmIndex].completed = value;

        actualCharacters[actualCharIndex] = actualChar;

        set({ selectedCharacters: actualCharacters });
      },
      toggleAllFarmPlaces: (character, value) => {
        const actualCharacters: CharactersFarm[] = get().selectedCharacters;

        const actualCharIndex = actualCharacters.findIndex(
          (item) => item.character.id == character.id
        );

        if (actualCharIndex == -1) {
          return;
        }

        actualCharacters[actualCharIndex].selectedFarmPlaces.forEach(
          (i) => (i.completed = value)
        );

        set({ selectedCharacters: actualCharacters });
      },
      hardReset() {
        set({
          selectedCharacters: [],
        });
      },

      deleteCharacter(character) {
        const actualCharacters: CharactersFarm[] = get().selectedCharacters;

        const actualCharIndex = actualCharacters.findIndex(
          (item) => item.character.id == character.id
        );

        if (actualCharIndex == -1) {
          return;
        }

        set({
          selectedCharacters: actualCharacters.filter(
            (i) => i.character.id != character.id
          ),
        });
      },
    }),
    {
      name: "characters-storage",
    }
  )
);
