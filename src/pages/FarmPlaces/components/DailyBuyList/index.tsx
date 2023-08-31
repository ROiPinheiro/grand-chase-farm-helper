import { useMemo } from "react";
import { DungeonType } from "../../../../data/dungeons";
import { usePlacesToFarmStore } from "../../../../store/PlacesToFarmStore";
import { ListDivider } from "./components/ListDivider";
import { PlaceList } from "./components/PlaceList";

function DailyBuyList() {
  const { dungeons } = usePlacesToFarmStore();

  const heroDungeons = useMemo(() => {
    return dungeons.filter((d) => d.type === DungeonType.HERO_DUNGEON);
  }, [dungeons]);

  const basicDungeons = useMemo(() => {
    return dungeons.filter((d) => d.type === DungeonType.DUNGEON);
  }, [dungeons]);

  const raids = useMemo(() => {
    return dungeons.filter((d) => d.type === DungeonType.RAID);
  }, [dungeons]);

  return (
    <>
      <ListTitle text="Hero Dungeons" />
      <ListDivider />

      <PlaceList list={heroDungeons} />

      <ListTitle text="Raids" />
      <ListDivider />

      <PlaceList list={raids} />

      <ListTitle text="Dungeons" />
      <ListDivider />

      <PlaceList list={basicDungeons} />
    </>
  );
}

function ListTitle({ text }: { text: string }) {
  return (
    <h3 className="bg-slate-700 text-white py-1 px-3 rounded-xl w-fit font-bold">
      {text}
    </h3>
  );
}

export default DailyBuyList;
