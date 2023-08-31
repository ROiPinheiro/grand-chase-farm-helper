import { HamburgerIcon } from "@chakra-ui/icons";
import { Divider, IconButton, Tooltip } from "@chakra-ui/react";
import { useMemo } from "react";
import { characters } from "../../../../data/characters";
import { Dungeon, DungeonType } from "../../../../data/dungeons";
import useTimer from "../../../../hooks/useTimer";
import { usePlacesToFarmStore } from "../../../../store/PlacesToFarmStore";
import { ListDivider } from "./components/ListDivider";

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

function PlaceList({ list }: { list: Dungeon[] }) {
  const { actualDate } = useTimer();

  return (
    <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
      {list.map((place) => {
        return (
          <ListItem
            key={place.id}
            isComplete={place.id % 2 == 0}
            isOpen={place.openDays.includes(actualDate.getDay())}
            place={place}
          />
        );
      })}
    </div>
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

function ListItem({
  place,
  isComplete = false,
  isOpen,
}: {
  place: Dungeon;
  isComplete: boolean;
  isOpen: boolean;
}) {
  return (
    <div
      className={`${
        isOpen ? "bg-[#243952] text-white" : "bg-gray-800 text-gray-600"
      } h-15 p-4 rounded-xl`}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className={"font-bold text-2xl"}>{place.name}</h2>

        <IconButton size={"xs"} icon={<HamburgerIcon />} aria-label={""} />
      </div>
      <div className="flex justify-between">
        <h3>Status</h3>
        <div className="font-bold">
          <span className="text-orange-400">
            {isOpen && !isComplete && "OPEN"}
          </span>
          <span className="text-red-600">{!isOpen && "CLOSED"}</span>
          <span className="text-orange-400">
            {isOpen && isComplete && "COMPLETE"}
          </span>
        </div>
      </div>
      <Divider />
      <div className="grid gap-2 lg:grid-cols-6 grid-cols-3 mt-4">
        {characters.map((c) => (
          <Tooltip
            key={c.id}
            openDelay={500}
            label={c.name}
            className="capitalize"
          >
            <button className="flex justify-center hover:opacity-70 relative">
              <div
                className={`${
                  isComplete || !isOpen ? "bg-gray-900" : ""
                }  absolute w-8 h-8 rounded-full opacity-80`}
              />

              <img
                src={c.src}
                className="h-full max-h-8 w-full max-w-fit rounded-full object-cover"
              />
            </button>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
