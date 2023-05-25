import { useForm } from "@mantine/form";
import {
  TextInput,
  Flex,
  Drawer,
  FileInput,
  LoadingOverlay,
} from "@mantine/core";
import { addNewDiseases } from "@/api";
import { notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";
import CustomButton from "@/components/elements/CustomButton";
import AddSymptomDrawer from "./AddSymptomDrawer";
import AddPrecautionDrawer from "./AddPrecautionDrawer";
import { useState } from "react";

export default function AddDiseaseDrawer({ opened, close }) {
  const [visible, { toggle }] = useDisclosure(false);

  const [symptoms, setSymptoms] = useState([]);
  const [symptomDrawerOpened, setSymptomDrawerOpened] = useState(false);

  const openSymptomDrawer = () => {
    setSymptomDrawerOpened(true);
  };
  const closeSymptomDrawer = (addedSymptoms) => {
    setSymptoms(addedSymptoms);
    form.setFieldValue("symptoms", addedSymptoms);
    setSymptomDrawerOpened(false);
  };

  const [precautions, setPrecautions] = useState([]);
  const [precautionDrawerOpened, setPrecautionDrawerOpened] = useState(false);

  const openPrecautionDrawer = () => {
    setPrecautionDrawerOpened(true);
  };
  const closePrecautionDrawer = (addedPrecautions) => {
    setPrecautions(addedPrecautions);
    form.setFieldValue("precautions", addedPrecautions);
    setPrecautionDrawerOpened(false);
  };

  const form = useForm({
    initialValues: {
      name: "",
      description: "",
      image: "",
      symptoms: [],
      precautions: [],
      type: "",
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 3 characters" : null,
      description: (value) =>
        value.length < 10
          ? "Description must have at least 10 characters"
          : null,
      image: (value) => (value === undefined ? "Must select an image" : null),
      type: (value) =>
        value.length < 50 ? "Type must have atleast 3 characters" : null,
    },
  });

  return (
    <Drawer
      opened={opened}
      onClose={close}
      title="ADD DISEASE"
      position="right"
    >
      <LoadingOverlay visible={visible} overlayBlur={2} />
      <form
        maw={320}
        mx="auto"
        onSubmit={form.onSubmit(() => {
          console.log(form.values);
          toggle();
          addNewDiseases(form.values).then((response) => {
            notifications.show({
              title: "success",
              message: response.data.message,
            });
            close();
          });
        })}
      >
        <TextInput
          withAsterisk
          label="Disease Name"
          placeholder="Enter the disease name"
          mb={20}
          {...form.getInputProps("name")}
        />

        <TextInput
          withAsterisk
          label="Description"
          placeholder="Enter the disease description"
          mb={20}
          {...form.getInputProps("description")}
        />

        <FileInput
          placeholder="Pick an image"
          label="Disease Image"
          accept="image/png,image/jpeg,image/jpg,image/webp"
          mb={20}
          {...form.getInputProps("image")}
        />

        <Flex direction={"column"} gap={20}>
          <Flex justify={"center"} gap={10} my={10}>
            <CustomButton
              label={"Add Symptoms"}
              variant={"outline"}
              color={"green"}
              borderColor={"green"}
              width={"100%"}
              onClick={openSymptomDrawer}
            />
            <CustomButton
              label={"Add Precautions"}
              variant={"outline"}
              color={"green"}
              borderColor={"green"}
              width={"100%"}
              onClick={openPrecautionDrawer}
            />
          </Flex>

          <CustomButton
            type={"submit"}
            label={"Add Disease"}
            variant={"filled"}
            backgroundColor={"green"}
            width={"100%"}
            height={60}
          />
        </Flex>
      </form>

      <AddSymptomDrawer
        opened={symptomDrawerOpened}
        close={closeSymptomDrawer}
      />

      <AddPrecautionDrawer
        opened={precautionDrawerOpened}
        close={closePrecautionDrawer}
      />
    </Drawer>
  );
}
