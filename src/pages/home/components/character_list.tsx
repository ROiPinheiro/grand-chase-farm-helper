import { characters } from "../../../data/characters";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Checkbox,
  FormControl,
  useDisclosure,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { usePlacesToFarmStore } from "../../../store/places-to-farm-store";

export default function CharacterList() {
  const [char, setChar] = useState<Character>(characters[0]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);

  const { hardReset, placesToFarm } = usePlacesToFarmStore();

  function onCharClick(char: Character) {
    setChar(char);
    onOpen();
  }

  return (
    <>
      <div>
        <h2 className="text-4xl pb-6 font-bold">Select characters to list</h2>

        <div>
          {characters.map((char) => (
            <button
              className="hover:font-bold"
              onClick={() => onCharClick(char)}
              key={char.name}
            >
              <img src={char.src} alt={char.name} width="62" height="62" />

              <span className="capitalize">{char.name}</span>
            </button>
          ))}
        </div>

        <Button colorScheme="red" onClick={hardReset}>
          Hard reset places to farm
        </Button>
      </div>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <FormControl>
            <AlertDialogHeader>
              Select places to farm with:
              <span className="capitalize  font-semibold">{char.name}</span>
            </AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              <div className="flex justify-between">
                <img
                  src={char?.src ?? ""}
                  alt={char?.name ?? ""}
                  width="62"
                  height="62"
                />

                <div>
                  {placesToFarm.map((place) => (
                    <Checkbox key={place.id}>{place.name}</Checkbox>
                  ))}
                </div>
              </div>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" colorScheme="green" ml={3}>
                Add
              </Button>
            </AlertDialogFooter>
          </FormControl>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
