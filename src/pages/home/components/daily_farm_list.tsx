import { useCharactersStore } from "../../../store/character-store";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
  Checkbox,
  Tooltip,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon, DeleteIcon } from "@chakra-ui/icons";

export default function DailyFarmList() {
  const {
    selectedCharacters,
    checkFarmPlace,
    toggleAllFarmPlaces,
    deleteCharacter,
  } = useCharactersStore();

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Character</Th>
            <Th>Places to farm</Th>
            <Th>Options</Th>
          </Tr>
        </Thead>
        <Tbody>
          {selectedCharacters?.map((selectedChar) => (
            <Tr key={selectedChar.character.id}>
              <Td>
                <div>
                  <img
                    src={selectedChar.character.src}
                    alt={selectedChar.character.name}
                    width="32"
                    height="32"
                  />
                </div>
              </Td>
              <Td>
                <div className="justify-between">
                  {selectedChar.selectedFarmPlaces.map((farmPlace) => {
                    const farmPlaceId = `${farmPlace.name}_${selectedChar.character.name}`;

                    return (
                      <label
                        className="flex items-center"
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
              </Td>
              <Td>
                <Tooltip label="Check all items">
                  <IconButton
                    onClick={() =>
                      toggleAllFarmPlaces(selectedChar.character, true)
                    }
                    aria-label="update-all"
                    icon={<CheckIcon />}
                  />
                </Tooltip>
                <Tooltip label="Uncheck all items">
                  <IconButton
                    onClick={() =>
                      toggleAllFarmPlaces(selectedChar.character, false)
                    }
                    aria-label="update-all"
                    icon={<CloseIcon />}
                  />
                </Tooltip>
                <Tooltip label="Delete character">
                  <IconButton
                    onClick={() => deleteCharacter(selectedChar.character)}
                    aria-label="update-all"
                    icon={<DeleteIcon />}
                    colorScheme="red"
                  />
                </Tooltip>
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Character</Th>
            <Th>Places to farm</Th>
            <Th>Options</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
