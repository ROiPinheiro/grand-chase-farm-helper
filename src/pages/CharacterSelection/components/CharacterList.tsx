import { characters } from "../../../data/characters";
import { useCharactersStore } from "../../../store/character-store";
import { useSelectedCharacterStore } from "../../../store/SelectedCharacterStore";

import { Divider } from "@chakra-ui/react";

export default function CharacterList() {
  const { setCharacter } = useSelectedCharacterStore();
  const { selectedCharacters } = useCharactersStore();

  function hasThisChar(char: Character): boolean {
    const finded = selectedCharacters.find(
      (selected) => selected.character.id == char.id
    );

    return finded ? true : false;
  }

  return (
    <div>
      <div className="flex flex-shrink-0 flex-grow-0 flex-wrap">
        {characters.map((char) => (
          <div
            key={char.name}
            className={`${
              hasThisChar(char)
                ? "bg-red-300 hover:bg-red-400"
                : "bg-blue-300 hover:bg-blue-400"
            }   hover:cursor-pointer p-2 m-1 rounded-md hover:drop-shadow hover:font-bold`}
          >
            <button onClick={() => setCharacter(char)}>
              <img src={char.src} alt={char.name} width="62" height="62" />

              <span className="capitalize">{char.name}</span>
            </button>
          </div>
        ))}
      </div>

      <Divider className="pt-6" />

      <div className="pt-6 text-sm">
        <div className="flex gap-4">
          <div className="flex gap-2 items-center">
            <div className="h-4 w-4 bg-red-300" />
            <span>already selected</span>
          </div>

          <div className="flex gap-2 items-center">
            <div className="h-4 w-4 bg-blue-300" />
            <span>not selected yet</span>
          </div>
        </div>
      </div>
    </div>
  );
}
