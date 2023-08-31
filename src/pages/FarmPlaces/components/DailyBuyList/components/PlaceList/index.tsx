import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton, Divider, Tooltip } from "@chakra-ui/react";
import { characters } from "../../../../../../data/characters";
import { Dungeon } from "../../../../../../data/dungeons";
import useTimer from "../../../../../../hooks/useTimer";

export function PlaceList({ list }: { list: Dungeon[] }) {
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
