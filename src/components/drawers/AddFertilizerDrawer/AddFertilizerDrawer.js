import { useForm } from "@mantine/form";
import { TextInput, Button, NumberInput, Drawer } from "@mantine/core";
import { addFertilizer } from "@/api";
import { notifications } from "@mantine/notifications";

export default function AddFertilizerDrawer({ opened, close }) {
  const form = useForm({
    initialValues: {
      name: "",
      price: 0,
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 3 letters" : null,
      price: (value) =>
        value <= 0 ? "Cannot have negative or 0 as the value" : null,
    },
  });

  return (
    <Drawer
      opened={opened}
      onClose={close}
      title="ADD FERTILIZER"
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
          // .catch((error)=>);
        })}
      >
        <TextInput
          withAsterisk
          label="Fertilizer Name"
          placeholder="Enter the fertilizer name"
          {...form.getInputProps("name")}
        />
        <NumberInput
          withAsterisk
          mt="md"
          label="Price per kg"
          placeholder="Enter the price"
          {...form.getInputProps("price")}
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
