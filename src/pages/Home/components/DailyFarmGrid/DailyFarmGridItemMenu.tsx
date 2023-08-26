import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  CharactersFarm,
  useCharactersStore,
} from "../../../../store/character-store";

function DailyFarmGridItemMenu({
  selectedChar,
}: {
  selectedChar: CharactersFarm;
}) {
  const { toggleAllFarmPlaces, deleteCharacter } = useCharactersStore();

  return (
    <Menu size={"xs"}>
      <MenuButton size={"xs"} as={Button} rightIcon={<ChevronDownIcon />}>
        Options
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={() => toggleAllFarmPlaces(selectedChar.character, true)}
        >
          Check All - Daily
        </MenuItem>
        <MenuItem>Check All - Weekly</MenuItem>
        <MenuDivider />
        <MenuItem
          onClick={() => toggleAllFarmPlaces(selectedChar.character, false)}
        >
          Uncheck All - Daily
        </MenuItem>
        <MenuItem>Uncheck All - Weekly</MenuItem>
        <MenuDivider />
        <MenuItem onClick={() => deleteCharacter(selectedChar.character)}>
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default DailyFarmGridItemMenu;
