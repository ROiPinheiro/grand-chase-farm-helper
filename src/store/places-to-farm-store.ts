import { create } from "zustand";
import { persist } from "zustand/middleware";
import { defaultPlacesToFarm } from "../data/places-to-farm";

interface PlaceToFarm {
  id: number;
  name: string;
}

interface PlacesToFarmState {
  placesToFarm: PlaceToFarm[];
  addPlaceToFarm: (placeName: string) => void;
  removePlaceToFarm: (placeToRemove: PlaceToFarm) => void;
  hardReset: () => void;
}

export const usePlacesToFarmStore = create<PlacesToFarmState>()(
  persist(
    (set, get) => ({
      placesToFarm: defaultPlacesToFarm,
      addPlaceToFarm(placeName) {
        const places = get().placesToFarm;
        const lastPlace = places[places.length - 1];

        set({
          placesToFarm: [
            ...get().placesToFarm,
            {
              id: lastPlace.id + 1,
              name: placeName,
            },
          ],
        });
      },
      removePlaceToFarm(placeToRemove) {
        const places = get().placesToFarm;
        const filteredPlaces = places.filter(
          (place) => place.id != placeToRemove.id
        );

        set({
          placesToFarm: filteredPlaces,
        });
      },
      hardReset() {
        set({ placesToFarm: defaultPlacesToFarm });
      },
    }),
    {
      name: "place-to-farm-storage",
    }
  )
);
