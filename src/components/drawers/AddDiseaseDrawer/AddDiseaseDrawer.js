import { useForm } from "@mantine/form";
import {
  TextInput,
  Button,
  NumberInput,
  Drawer,
  FileInput,
} from "@mantine/core";
import { addFertilizer } from "@/api";
import { notifications } from "@mantine/notifications";

export default function AddDiseaseDrawer({ opened, close }) {
  const form = useForm({
    initialValues: {
      name: "",
      image: "",
      description: "",
      symtoms: [],
      precautions: [],
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 3 letters" : null,
      description: (value) =>
        value.length < 10 ? "Description must have at least 10 letters" : null,
    },
  });

  return (
    <Drawer
      opened={opened}
      onClose={close}
      title="ADD DISEASE"
      position="right"
    >
      <form
        maw={320}
        mx="auto"
        onSubmit={form.onSubmit(() => {
          console.log(form.values);
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
        />

        <Button
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
          Add Fertilizer
        </Button>
      </form>
    </Drawer>
  );
}
