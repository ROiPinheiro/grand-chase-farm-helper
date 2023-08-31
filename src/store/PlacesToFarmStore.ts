import { create } from "zustand";
import { persist } from "zustand/middleware";
import { defaultDungeons, Dungeon, DungeonType } from "../data/dungeons";

interface PlacesToFarmState {
  dungeons: Dungeon[];
  addPlaceToFarm: (placeName: string) => void;
  removePlaceToFarm: (placeToRemove: Dungeon) => void;
  hardReset: () => void;
}

export const usePlacesToFarmStore = create<PlacesToFarmState>()(
  persist(
    (set, get) => ({
      dungeons: defaultDungeons,
      addPlaceToFarm(placeName) {
        const places = get().dungeons;
        const lastPlace = places[places.length - 1];

        set({
          dungeons: [
            ...get().dungeons,
            {
              id: lastPlace.id + 1,
              name: placeName,
              openDays: [],
              resetDays: [],
              type: DungeonType.DUNGEON,
            },
          ],
        });
      },
      removePlaceToFarm(placeToRemove) {
        const places = get().dungeons;
        const filteredPlaces = places.filter(
          (place) => place.id != placeToRemove.id
        );

        set({
          dungeons: filteredPlaces,
        });
      },
      hardReset() {
        set({ dungeons: defaultDungeons });
      },
    }),
    {
      name: "dungeons-store",
      version: 0,
    }
  )
);
