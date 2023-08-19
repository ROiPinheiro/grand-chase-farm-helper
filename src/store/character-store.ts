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
}

const initialState: CharactersFarm[] = [];

export const useCharactersStore = create<CharactersState>()(
  persist(
    (set, get) => ({
      selectedCharacters: initialState,
      addCharacter(char) {
        console.log(char);

        const actualCharacters = get().selectedCharacters;

        const duplicatedChar = actualCharacters.find(
          (item) => item.character.id == char.character.id
        );

        if (duplicatedChar) {
          duplicatedChar.selectedFarmPlaces = char.selectedFarmPlaces;
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

        console.log(actualChar, farmPlaceIndex);

        const farmIndex = actualChar.selectedFarmPlaces.findIndex(
          (i) => i.id == farmPlaceIndex
        );

        if (farmIndex == -1) {
          return;
        }

        actualChar.selectedFarmPlaces[farmIndex].completed = value;

        console.log(actualChar);

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
    }),
    {
      name: "characters-storage",
    }
  )
);
