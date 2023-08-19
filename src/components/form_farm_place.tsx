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

export default function FormFarmPlace() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef(null);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: "",
    },
  });

  function onSubmit(data: { firstName: string }) {
    console.log(data);
  }

  function onModalClose() {
    reset();
    console.log("reset");

    onClose();
  }

  return (
    <>
      <Button onClick={onOpen}>Add new place to farm</Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={() => onModalClose()}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>New place to farm form</AlertDialogHeader>
          <AlertDialogCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <AlertDialogBody>
              <span>Add here the name of place you want to add</span>
              <Divider />

              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <>
                    <FormLabel htmlFor="input-name-place">Name</FormLabel>
                    <Input
                      placeholder="Exemple: TOD 5F"
                      id="input-name-place"
                      name="input-name-place"
                      onChange={field.onChange}
                      value={field.value}
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
