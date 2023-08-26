import { useCharactersStore } from "../../../../store/character-store";
import { Checkbox, Divider } from "@chakra-ui/react";

import DailyFarmGridItemMenu from "./DailyFarmGridItemMenu";
import ListTitle from "../ListTitle";

export default function DailyFarmList() {
  const { selectedCharacters, checkFarmPlace } = useCharactersStore();

  return (
    <>
      <ListTitle text="Daily farm list" />
      <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {selectedCharacters?.map((selectedChar) => (
          <div key={selectedChar.character.id}>
            <div className="pb-2 p-4 h-full">
              <div className="flex justify-between items-center pt-2 pb-2">
                <div className="flex gap-2 justify-between items-center">
                  <img
                    src={selectedChar.character.src}
                    alt={selectedChar.character.name}
                    className="h-8 w-8"
                    width="32"
                    height="32"
                  />

                  <span className="capitalize">
                    {selectedChar.character.name}
                  </span>
                </div>

                <DailyFarmGridItemMenu selectedChar={selectedChar} />
              </div>

              <div className="grid sm:grid-cols-2 grid-cols-1 pt-2 pb-2 ">
                {selectedChar.selectedFarmPlaces.map((farmPlace) => {
                  const farmPlaceId = `${farmPlace.name}_${selectedChar.character.name}`;

                  return (
                    <label
                      className="flex pb-1 cursor-pointer items-center"
                      key={farmPlaceId}
                      htmlFor={farmPlaceId}
                    >
                      <Checkbox
                        name={farmPlaceId}
                        id={farmPlaceId}
                        onChange={(e) =>
                          checkFarmPlace(
                            selectedChar.character,
                            farmPlace.id,
                            e.target.checked
                          )
                        }
                        isChecked={farmPlace.completed}
                      />
                      <span className="pl-1 text-xs truncate">
                        {farmPlace.name}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
            <Divider />
          </div>
        ))}
      </div>
    </>
  );
}
