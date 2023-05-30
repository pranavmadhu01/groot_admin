import { useForm } from "@mantine/form";
import {
  TextInput,
  Flex,
  Drawer,
  FileInput,
  LoadingOverlay,
  Select,
  Button,
} from "@mantine/core";
import { addNewDiseases, getAllPlants } from "@/api";
import { notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";
import CustomButton from "@/components/elements/CustomButton";
import AddSymptomDrawer from "./AddSymptomDrawer";
import AddPrecautionDrawer from "./AddPrecautionDrawer";
import { useState, useEffect } from "react";

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
      plant_id: "",
      image: "",
      type:"",
      symptoms: [],
      precautions: [],
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 3 characters" : null,
      description: (value) =>
        value.length < 10
          ? "Description must have at least 10 characters"
          : null,
      image: (value) => (value === undefined ? "Must select an image" : null),
    },
  });

  const [plants, setPlants] = useState([]);
  useEffect(() => {
    getAllPlants()
      .then((response) => {
        console.log(response.data.data);
        setPlants(response.data.data);
      })
      .catch((error) => {
        notifications.show({
          title: "Error",
          message: error.response.data.message,
        });
      });
  }, [opened]);

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
          toggle();
          console.log(form.values);
          addNewDiseases(form.values, form.values.plant_id).then((response) => {
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

        <Select
          label="Plant Name"
          placeholder="Select a plant"
          data={plants.map((plant) => ({
            value: plant._id,
            label: plant.name,
          }))}
          {...form.getInputProps("plant_id")}
        />

        <Select
          label="Type"
          placeholder="Select a type"
          data={[
            { value: "pest", label: "Pest" },
            { value: "disease", label: "Disease" },
          ]}
          {...form.getInputProps("type")}
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
              type={'button'}
              variant={"outline"}
              color={"green"}
              borderColor={"green"}
              width={"100%"}
              onClick={openSymptomDrawer}
            />
            <CustomButton
              label={"Add Precautions"}
              type={'button'}
              variant={"outline"}
              color={"green"}
              borderColor={"green"}
              width={"100%"}
              onClick={openPrecautionDrawer}
            />
          </Flex>

          <CustomButton
            type="submit"
            label={"Add Disease"}
            variant={"filled"}
            backgroundColor={"green"}
            width={"100%"}
            height={60}
          />
          {/* <Button
            variant="outline"
            type="submit"
            style={{
              marginTop: 30,
              marginBottom: 50,
              color: "white",
              backgroundColor: "green",
              border: "none",
              borderRadius: 30,
              paddingVertical: 10,
              paddingHorizontal: 30,
            }}
          >
            Add Disease
          </Button> */}
        </Flex>

        <AddSymptomDrawer
          opened={symptomDrawerOpened}
          close={closeSymptomDrawer}
        />

        <AddPrecautionDrawer
          opened={precautionDrawerOpened}
          close={closePrecautionDrawer}
        />
      </form>
    </Drawer>
  );
}
