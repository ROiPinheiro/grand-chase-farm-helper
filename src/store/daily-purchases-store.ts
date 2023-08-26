import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Item {
  id: string;
  name: string;
}

export interface ItemPurchase extends Item {
  bought: boolean;
}

export type PurchaseType = "DAILY" | "WEEKLY";

export interface DailyPurchasesStoreState {
  dailyPurchases: ItemPurchase[];
  weeklyPurchases: ItemPurchase[];

  addPurchase: (item: ItemPurchase, type: PurchaseType) => void;
  checkFarmPlace: (
    character: Character,
    farmPlaceIndex: number,
    value: boolean
  ) => void;
  toggleAllPurchase: (value: boolean, type: PurchaseType) => void;

  hardResetPurchases: (type: PurchaseType) => void;

  removePurchase: (item: ItemPurchase, type: PurchaseType) => void;
}

const initialDailyState: ItemPurchase[] = [];
const initialWeeklyState: ItemPurchase[] = [];

export const useCharactersStore = create<DailyPurchasesStoreState>()(
  persist(
    (set, get) => ({
      dailyPurchases: initialDailyState,
      weeklyPurchases: initialWeeklyState,

      addPurchase(item: ItemPurchase, type: PurchaseType) {
        if (type == "DAILY") {
          const actualDailyPurchases: ItemPurchase[] = get().dailyPurchases;
          set({ dailyPurchases: [...actualDailyPurchases, item] });
        }

        if (type == "WEEKLY") {
          const actualWeeklyPurchases: ItemPurchase[] = get().weeklyPurchases;
          set({ weeklyPurchases: [...actualWeeklyPurchases, item] });
        }
      },
      checkFarmPlace(
        character: Character,
        farmPlaceIndex: number,
        value: boolean
      ) {},
      toggleAllPurchase(value: boolean, type: PurchaseType) {},

      hardResetPurchases(type: PurchaseType) {},

      removePurchase(item: ItemPurchase, type: PurchaseType) {},
    }),
    {
      name: "purchases-store",
      version: 0,
    }
  )
);
