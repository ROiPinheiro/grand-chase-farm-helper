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
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { PlaceToFarm } from "../../../data/places-to-farm";
import { FarmPlace, useCharactersStore } from "../../../store/character-store";
import { usePlacesToFarmStore } from "../../../store/PlacesToFarmStore";
import { useSelectedCharacterStore } from "../../../store/SelectedCharacterStore";

interface FromPlaceToFarm extends PlaceToFarm {
  checked: boolean;
}

interface FormData {
  selectedFarmPlaces: FromPlaceToFarm[];
  currentTA: number;
}

function CharacterModal() {
  const { t } = useTranslation();

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
      addCharacter({
        character: {
          ...selectedCharacter,
          currentTA: data.currentTA,
        },
        selectedFarmPlaces: [],
      });
      onClose();
      return;
    }

    const selected: FarmPlace[] = placesFiltered.map((item) => {
      return {
        id: item.id,
        name: item.name,
        completed: false,
        openDays: [],
        resetDays: [],
      };
    });

    addCharacter({
      character: {
        ...selectedCharacter,
        currentTA: data.currentTA,
      },
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
            <span className="capitalize font-semibold">
              {` ${selectedCharacter?.name}`}
            </span>
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <img
              src={selectedCharacter?.src ?? ""}
              alt={selectedCharacter?.name ?? ""}
              width="32"
              height="32"
              className="h-8 w-8 mb-4"
            />

            <Controller
              control={control}
              name="currentTA"
              render={({ field }) => (
                <FormControl>
                  <FormLabel>{t("character_form_current_ta")}</FormLabel>
                  <NumberInput max={1000000} min={1000}>
                    <NumberInputField {...field} />
                  </NumberInput>
                </FormControl>
              )}
            />

            <div className="mt-4">
              <div className="grid grid-cols-2">
                {fields.map((fieldItem, index) => {
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
                          <span className="truncate">{fields[index].name}</span>
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
