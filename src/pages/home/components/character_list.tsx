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
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { usePlacesToFarmStore } from "../../../store/places-to-farm-store";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { FarmPlace, useCharactersStore } from "../../../store/character-store";
import { PlaceToFarm } from "../../../data/places-to-farm";

interface FromPlaceToFarm extends PlaceToFarm {
  checked: boolean;
}

interface FormData {
  character?: Character;
  selectedFarmPlaces: FromPlaceToFarm[];
}

export default function CharacterList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);

  const { hardReset, placesToFarm } = usePlacesToFarmStore();
  const { addCharacter } = useCharactersStore();

  function onCharClick(char: Character) {
    setValue("character", char);
    onOpen();
  }

  function onSubmit(data: FormData) {
    console.log("on submit", data);

    const placesFiltered = data.selectedFarmPlaces.filter(
      (place) => place.checked == true
    );

    if (placesFiltered.length == 0) {
      onClose();
      return;
    }

    const selected: FarmPlace[] = placesFiltered.map((item) => {
      return {
        id: item.id,
        name: item.name,
        completed: false,
      };
    });

    addCharacter({
      character: data.character!,
      selectedFarmPlaces: selected,
    });
    onClose();
  }

  const { control, handleSubmit, reset, setValue, watch } = useForm<FormData>({
    defaultValues: {
      selectedFarmPlaces: placesToFarm,
    },
  });

  const actualChar = watch("character");

  const { fields } = useFieldArray({
    control,
    name: "selectedFarmPlaces",
  });

  // console.log(placesToFarm);

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
        onCloseComplete={reset}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <AlertDialogHeader>
              Select places to farm with:
              <span className="capitalize  font-semibold">
                {actualChar?.name}
              </span>
            </AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              <div className="flex justify-between">
                <img
                  src={actualChar?.src ?? ""}
                  alt={actualChar?.name ?? ""}
                  width="62"
                  height="62"
                />

                <div>
                  {fields.map((fieldItem, index) => {
                    // console.log(fieldItem);

                    return (
                      <Controller
                        key={fieldItem.id}
                        control={control}
                        name={`selectedFarmPlaces.${index}.checked`}
                        render={({ field }) => (
                          <Checkbox
                            onChange={(e) => field.onChange(e.target.checked)}
                            isChecked={field.value}
                          >
                            {fields[index].name}
                          </Checkbox>
                        )}
                      />
                    );
                  })}
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
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
