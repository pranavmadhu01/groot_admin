import { useForm } from "@mantine/form";
import {
  TextInput,
  Button,
  NumberInput,
  Drawer,
  FileInput,
  LoadingOverlay,
} from "@mantine/core";
import { addANewPlant } from "@/api";
import { notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";
export default function AddPlantDrawer({ opened, close }) {
  const [visible, { toggle }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      name: "",
      seedrate: 0,
      defaultph: 0,
      image: "",
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 3 letters" : null,
      seedrate: (value) =>
        value <= 0 ? "Cannot have negative or 0 as the value" : null,
      defaultph: (value) =>
        value <= 0 || value > 14
          ? "pH value should be in the range 0 - 14"
          : null,
    },
  });
  return (
    <Drawer opened={opened} onClose={close} title="ADD PLANT" position="right">
      <LoadingOverlay visible={visible} overlayBlur={2} />
      <form
        maw={320}
        mx="auto"
        onSubmit={form.onSubmit(() => {
          toggle();
          addANewPlant(form.values).then((response) => {
            notifications.show(response.data.message);
            close();
          });
        })}
      >
        <TextInput
          withAsterisk
          label="Plant Name"
          placeholder="Enter the plant name"
          {...form.getInputProps("name")}
        />
        <NumberInput
          withAsterisk
          mt="md"
          label="Seed rate per gram"
          placeholder="Enter the seed rate per gram"
          {...form.getInputProps("seedrate")}
        />
        <NumberInput
          withAsterisk
          mt="md"
          label="Default pH value"
          placeholder="Enter the default pH value"
          {...form.getInputProps("defaultph")}
        />
        <FileInput
          mt="md"
          placeholder="Pick Image"
          label="Plant Image"
          {...form.getInputProps("image")}
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
          Add Plant
        </Button>
      </form>
    </Drawer>
  );
}
