import { useCharactersStore } from "../../../store/character-store";
import { IconButton, Checkbox, Tooltip, Divider } from "@chakra-ui/react";
import {
  CheckIcon,
  CloseIcon,
  DeleteIcon,
  SettingsIcon,
} from "@chakra-ui/icons";

export default function DailyFarmList() {
  const {
    selectedCharacters,
    checkFarmPlace,
    toggleAllFarmPlaces,
    deleteCharacter,
  } = useCharactersStore();

  return (
    <div>
      <div className="grid grid-cols-3 uppercase font-bold text-xs">
        <span>Character</span>
        <span>Places to farm</span>
        <span className="flex justify-end">Options</span>
      </div>

      <div>
        {selectedCharacters?.map((selectedChar) => (
          <>
            <div
              className="grid grid-cols-3 pb-2 pt-2"
              key={selectedChar.character.id}
            >
              <div className="flex pt-2 pb-2  items-center ">
                <img
                  src={selectedChar.character.src}
                  alt={selectedChar.character.name}
                  width="32"
                  height="32"
                />
              </div>
              <div>
                <div className="justify-between pt-2 pb-2 ">
                  {selectedChar.selectedFarmPlaces.map((farmPlace) => {
                    const farmPlaceId = `${farmPlace.name}_${selectedChar.character.name}`;

                    return (
                      <label
                        className="flex   items-center"
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
                        <span className="pl-1">{farmPlace.name}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center p-2 gap-2 justify-end">
                <Tooltip label="Check all items">
                  <IconButton
                    size="sm"
                    onClick={() =>
                      toggleAllFarmPlaces(selectedChar.character, true)
                    }
                    aria-label="check-all"
                    icon={<CheckIcon />}
                  />
                </Tooltip>
                <Tooltip label="Uncheck all items">
                  <IconButton
                    size="sm"
                    onClick={() =>
                      toggleAllFarmPlaces(selectedChar.character, false)
                    }
                    aria-label="uncheck-all"
                    icon={<CloseIcon />}
                  />
                </Tooltip>
                <Tooltip label="Update character | not working">
                  <IconButton
                    size="sm"
                    onClick={() => null}
                    aria-label="update-character"
                    icon={<SettingsIcon />}
                    colorScheme="yellow"
                  />
                </Tooltip>

                <Tooltip label="Delete character">
                  <IconButton
                    size="sm"
                    onClick={() => deleteCharacter(selectedChar.character)}
                    aria-label="delete"
                    icon={<DeleteIcon />}
                    colorScheme="red"
                  />
                </Tooltip>
              </div>
            </div>
            <Divider />
          </>
        ))}
      </div>
    </div>
  );
}
