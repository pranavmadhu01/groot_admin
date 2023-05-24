import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { TextInput, Button, Group, Box, Modal, Center } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import AddFertilizerCard from "../cards/AddFertilizerCard";

export default function AddFertilizerForm() {
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      name: "",
      cost: "",
    },
  });

  const handleSubmit = () => {
    console.log(form.values);
  };

  return (
    <>
      <Modal opened={opened} onClose={close}>
        <Center>
          <Box maw={320} mx="auto">
            <TextInput
              label="Fertilizer Name"
              placeholder="Enter the fertilizer name"
              {...form.getInputProps("name")}
              onChange={() => form.setFieldValue("name", randomId())}
            />
            <TextInput
              mt="md"
              label="Cost"
              placeholder="Enter the cost"
              {...form.getInputProps("cost")}
              onChange={() => form.setFieldValue("cost", randomId())}
            />
            <Button
              variant="outline"
              style={{
                marginTop: 30,
                marginBottom: 50,
                color: "white",
                backgroundColor: "green",
                border: 'none',
                borderRadius: 30,
                paddingVertical: 10,
                paddingHorizontal: 30,
              }}
              onClick={handleSubmit}
            >
              Add Fertilizer
            </Button>
          </Box>
        </Center>
      </Modal>

      <Group position="center">
        <AddFertilizerCard onClick={open} />
      </Group>
    </>
  );
}
