import { create } from "zustand";
import { persist } from "zustand/middleware";
import { defaultDungeons } from "../data/dungeons";

interface DailyDungeon {
  dungeonId: number;
  characters: {
    id: number;
    completed: boolean;
  }[];
}

interface DailyDungeonState {
  dailyDungeons: DailyDungeon[];
  addCharacterIntoDungeon: (dungeonId: number, characterId: number) => void;
  removeCharacterFromDungeon: (dungeonId: number, characterId: number) => void;
  toggleCharacterCompleteFromDungeon: (
    dungeonId: number,
    characterId: number,
    completed: boolean
  ) => void;
  toggleDungeonComplete: (dungeonId: number, completed: boolean) => void;
  hardReset: () => void;
}

const initialState: DailyDungeon[] = defaultDungeons.map((d) => {
  return {
    dungeonId: d.id,
    characters: [],
  };
});

export const useDailyDungeons = create<DailyDungeonState>()(
  persist(
    (set, get) => ({
      dailyDungeons: initialState,
      addCharacterIntoDungeon(dungeonId: number, characterId: number) {
        const storedDungeons = get().dailyDungeons;

        const thisDungeon = storedDungeons.findIndex(
          (sd) => sd.dungeonId === dungeonId
        );
        if (!thisDungeon) {
          return;
        }

        const thisChar = storedDungeons[thisDungeon].characters.findIndex(
          (td) => td.id === characterId
        );

        if (thisChar) {
          return;
        }

        const updatedDungeons: DailyDungeon[] = storedDungeons.map(
          (dg, index) => {
            if (index === thisDungeon) {
              return {
                ...dg,
                characters: [
                  ...dg.characters,
                  { id: characterId, completed: false },
                ],
              };
            }

            return dg;
          }
        );

        set({
          dailyDungeons: updatedDungeons,
        });
      },
      removeCharacterFromDungeon(dungeonId: number, characterId: number) {
        console.log(dungeonId, characterId);
      },
      toggleCharacterCompleteFromDungeon(
        dungeonId: number,
        characterId: number,
        completed: boolean
      ) {
        console.log(dungeonId, characterId, completed);
      },
      toggleDungeonComplete(dungeonId: number, completed: boolean) {
        console.log(dungeonId, completed);
      },

      hardReset() {
        set({ dailyDungeons: initialState });
      },
    }),
    {
      name: "daily-dungeons-store",
      version: 0,
    }
  )
);
