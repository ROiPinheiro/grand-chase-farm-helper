export enum DungeonType {
  RAID,
  HERO_DUNGEON,
  DUNGEON,
}

export interface Dungeon {
  id: number;
  name: string;
  type: DungeonType;
  openDays: ResetDays[];
  resetDays: ResetDays[];
}

enum ResetDays {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

const allDays: ResetDays[] = [0, 1, 2, 3, 4, 5, 6];

export const defaultDungeons: Dungeon[] = [
  {
    id: 1,
    name: "Wizard's Labyrinth",
    openDays: allDays,
    resetDays: allDays,
    type: DungeonType.HERO_DUNGEON,
  },
  {
    id: 2,
    name: "Tower of Disappearance",
    openDays: allDays,
    resetDays: allDays,
    type: DungeonType.HERO_DUNGEON,
  },
  {
    id: 3,
    name: "Berkas' Lair",
    openDays: allDays,
    resetDays: allDays,
    type: DungeonType.RAID,
  },
  {
    id: 4,
    name: "Siege of Teroka",
    openDays: allDays,
    resetDays: allDays,
    type: DungeonType.DUNGEON,
  },
  {
    id: 5,
    name: "Temple of time",
    openDays: allDays,
    resetDays: allDays,
    type: DungeonType.DUNGEON,
  },
  {
    id: 6,
    name: "Sanctum of Destruction",
    openDays: allDays,
    resetDays: allDays,
    type: DungeonType.HERO_DUNGEON,
  },
  {
    id: 7,
    name: "The Crucible",
    openDays: allDays,
    resetDays: allDays,
    type: DungeonType.HERO_DUNGEON,
  },
  {
    id: 8,
    name: "Void",
    openDays: allDays,
    resetDays: [ResetDays.Monday],
    type: DungeonType.RAID,
  },
  {
    id: 9,
    name: "Land of Judgment",
    openDays: [ResetDays.Friday, ResetDays.Saturday, ResetDays.Sunday],
    resetDays: [ResetDays.Saturday, ResetDays.Sunday, ResetDays.Monday],
    type: DungeonType.HERO_DUNGEON,
  },
];
