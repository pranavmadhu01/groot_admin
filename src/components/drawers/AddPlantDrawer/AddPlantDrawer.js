import { useForm } from "@mantine/form";
import {
  TextInput,
  Button,
  NumberInput,
  Drawer,
  FileInput,
  LoadingOverlay,
} from "@mantine/core";
import { addANewPlant, getPlant, updatePlant } from "@/api";
import { notifications } from "@mantine/notifications";
import { useEffect, useState } from "react";

export default function AddPlantDrawer({ opened, close, edit, editPlantId }) {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    initialValues: {
      name: "",
      seedpercentingram: 0,
      seedcost: 0,
      defaultph: 0,
      image: "",
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 3 letters" : null,
      seedcost: (value) =>
        value <= 0 ? "Cannot have negative or 0 as the value" : null,
      seedpercentingram: (value) =>
        value <= 0 ? "Cannot have negative or 0 as the value" : null,
      defaultph: (value) =>
        value <= 0 || value > 14
          ? "pH value should be in the range 0 - 14"
          : null,
    },
  });

  useEffect(() => {
    if (edit && editPlantId) {
      fetchPlantData();
    } else {
      form.reset();
    }
  }, [edit, editPlantId]);

  const fetchPlantData = async () => {
    try {
      const plant = await getPlant(editPlantId);
      form.setValues(plant.data.data);
    } catch (error) {
      notifications.show({
        title: "Error",
        message: "Failed to fetch plant data!",
      });
    }
  };

  return (
    <Drawer
      opened={opened}
      onClose={close}
      title={edit ? "EDIT PLANT" : "ADD PLANT"}
      position="right"
    >
      <LoadingOverlay visible={loading} overlayBlur={2} />
      <form
        maw={320}
        mx="auto"
        onSubmit={form.onSubmit(async () => {
          setLoading(true);
          try {
            if (edit) {
              await updatePlant(editPlantId, form.values);
              close();
              notifications.show({
                title: "Success",
                message: "Plant updated successfully.",
              });
            } else {
              await addANewPlant(form.values);
              close();
              notifications.show({
                title: "Success",
                message: "Plant added successfully.",
              });
            }
          } catch (error) {
            notifications.show({
              title: "Error",
              message: "An error occured!",
            });
          } finally {
            setLoading(false);
          }
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
          precision={4}
          mt="md"
          label="Seed per cent in gram"
          placeholder="Enter the seed per cent in gram"
          {...form.getInputProps("seedpercentingram")}
        />
        <NumberInput
          withAsterisk
          precision={4}
          mt="md"
          label="Seed cost per gram"
          placeholder="Enter the seed cost per gram"
          {...form.getInputProps("seedcost")}
        />
        <NumberInput
          withAsterisk
          precision={4}
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
          {edit ? "Update Plant" : "Add Plant"}
        </Button>
      </form>
    </Drawer>
  );
}
