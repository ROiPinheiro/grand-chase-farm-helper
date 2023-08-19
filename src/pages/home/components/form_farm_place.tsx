import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Divider,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";

import { useForm, Controller } from "react-hook-form";
import { usePlacesToFarmStore } from "../../../store/places-to-farm-store";

export default function FormFarmPlace() {
  const { addPlaceToFarm } = usePlacesToFarmStore();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef(null);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      placeToFarmName: "",
    },
  });

  function onSubmit(data: { placeToFarmName: string }) {
    addPlaceToFarm(data.placeToFarmName);
    onClose();
  }

  return (
    <>
      <Button onClick={onOpen}>Add new place to farm</Button>
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
          <AlertDialogHeader>Add new place to farm</AlertDialogHeader>
          <AlertDialogCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <AlertDialogBody>
              <span>Add here the name of place you want to farm</span>
              <Divider className="pb-2" />

              <Controller
                name="placeToFarmName"
                control={control}
                render={({ field }) => (
                  <>
                    <FormLabel className="pt-2" htmlFor="input-name-place">
                      Place name
                    </FormLabel>
                    <Input
                      placeholder="Exemple: TOD 5F"
                      id="input-name-place"
                      name="input-name-place"
                      onChange={field.onChange}
                      defaultValue={field.value}
                    />
                  </>
                )}
              />
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" colorScheme="red" ml={3}>
                Add
              </Button>
            </AlertDialogFooter>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
