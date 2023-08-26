type PlaceResetCondition = "DAILY" | "WEEKLY";

export interface PlaceToFarm {
  id: number;
  name: string;
  reset: PlaceResetCondition;
}

export const defaultPlacesToFarm: PlaceToFarm[] = [
  {
    id: 1,
    name: "5F",
    reset: "DAILY",
  },
  {
    id: 2,
    name: "10F",
    reset: "DAILY",
  },
  {
    id: 3,
    name: "WL15",
    reset: "DAILY",
  },
  {
    id: 4,
    name: "WL24",
    reset: "DAILY",
  },
  {
    id: 5,
    name: "Berkas Lair",
    reset: "DAILY",
  },
  {
    id: 6,
    name: "Siege of Teroka",
    reset: "DAILY",
  },
  {
    id: 7,
    name: "Temple of time",
    reset: "DAILY",
  },
  {
    id: 8,
    name: "Sanctum of Destruction",
    reset: "DAILY",
  },
  {
    id: 9,
    name: "The Crucible",
    reset: "DAILY",
  },
  {
    id: 10,
    name: "Void",
    reset: "WEEKLY",
  },
  {
    id: 11,
    name: "Land of Judgment",
    reset: "WEEKLY",
  },
];
