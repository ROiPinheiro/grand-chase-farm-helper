import { create } from "zustand";

const initialState: Character | null = null;

interface SelectedCharacterStore {
  selectedCharacter: Character | null;
  setCharacter: (character: Character | null) => void;
}

export const useSelectedCharacterStore = create<SelectedCharacterStore>()(
  (set) => ({
    selectedCharacter: initialState,
    setCharacter(char) {
      console.log(char);

      set({ selectedCharacter: char });
    },
  })
);
