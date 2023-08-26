import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  Checkbox,
  AlertDialogFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { PlaceToFarm } from "../../../data/places-to-farm";
import { FarmPlace, useCharactersStore } from "../../../store/character-store";
import { usePlacesToFarmStore } from "../../../store/places-to-farm-store";
import { useSelectedCharacterStore } from "../../../store/SelectedCharacterStore";

interface FromPlaceToFarm extends PlaceToFarm {
  checked: boolean;
}

interface FormData {
  selectedFarmPlaces: FromPlaceToFarm[];
}

function CharacterModal() {
  const { placesToFarm } = usePlacesToFarmStore();
  const { addCharacter } = useCharactersStore();
  const { selectedCharacter, setCharacter } = useSelectedCharacterStore();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { control, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      selectedFarmPlaces: placesToFarm,
    },
  });

  const cancelRef = useRef(null);

  const { fields } = useFieldArray({
    control,
    name: "selectedFarmPlaces",
  });

  function onSubmit(data: FormData) {
    if (selectedCharacter == null) {
      return;
    }

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
      character: selectedCharacter,
      selectedFarmPlaces: selected,
    });
    onClose();
  }

  function onCloseComplete() {
    setCharacter(null);
    reset();
  }

  useEffect(() => {
    if (selectedCharacter != null) {
      onOpen();
    }
  }, [selectedCharacter, onOpen]);

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      onCloseComplete={onCloseComplete}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AlertDialogHeader>
            Select places to farm with:
            <span className="capitalize  font-semibold">
              {selectedCharacter?.name}
            </span>
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <div className="flex justify-between">
              <img
                src={selectedCharacter?.src ?? ""}
                alt={selectedCharacter?.name ?? ""}
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
  );
}

export default CharacterModal;
