import { useForm } from "@mantine/form";
import {
  TextInput,
  Button,
  NumberInput,
  Drawer,
  FileInput,
  LoadingOverlay,
} from "@mantine/core";
import { addFertilizer } from "@/api";
import { notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";
import CustomButton from "@/components/elements/CustomButton";

export default function AddDiseaseDrawer({ opened, close }) {
  const [visible, { toggle }] = useDisclosure(false);
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
        value.length < 50
          ? "Description must have at least 50 characters"
          : null,
      image: (value) => (value === undefined ? "Must select an image" : null),
      symtoms: (value) =>
        value.length < 3 ? "Enter atleast 3 symptoms" : null,
      precautions: (value) =>
        value.length < 3 ? "Enter atleast 3 precautions" : null,
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
          addFertilizer(form.values).then((response) => {
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
          {...form.getInputProps("name")}
        />

        <TextInput
          withAsterisk
          label="Description"
          placeholder="Enter the disease description"
          {...form.getInputProps("description")}
        />

        <FileInput
          placeholder="Pick an image"
          label="Disease Image"
          accept="image/png,image/jpeg,image/jpg,image/webp"
          {...form.getInputProps("image")}
        />

        <CustomButton
          variant={"outline"}
          color={'green'}
          borderColor={'green'}
          label={"Add Symptoms"}
        />

        <CustomButton
          variant={"filled"}
          label={"Add Fertilizer"}
          backgroundColor={"green"}
        />
      </form>
    </Drawer>
  );
}
