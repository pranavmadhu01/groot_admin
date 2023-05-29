import { TextInput, Flex, Drawer, LoadingOverlay, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import CustomButton from "@/components/elements/CustomButton";
import { useState } from "react";

export default function AddSymptomDrawer({ opened, close }) {
  const [visible, { toggle }] = useDisclosure(false);
  const [value, setValue] = useState("");
  const [symptoms, setSymptoms] = useState([]);

  const handleSymptomAdd = () => {
    if (value) {
      setSymptoms([...symptoms, value]);
      setValue("");
    }
  };

  const handleFinish = () => {
    close(symptoms);
  };

  return (
    <Drawer
      opened={opened}
      onClose={close}
      title="ADD SYMPTOMS"
      position="right"
    >
      <LoadingOverlay visible={visible} overlayBlur={2} />
      <TextInput
        label="Symptom"
        placeholder="Enter the symptom"
        mb={30}
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Flex gap={10}>
        <CustomButton
          label={"Add Next Symptom"}
          variant={"outline"}
          color={"green"}
          borderColor={"green"}
          width={"100%"}
          height={60}
          onClick={handleSymptomAdd}
        />
        <CustomButton
          label={"Finish"}
          variant={"filled"}
          backgroundColor={"green"}
          width={"100%"}
          height={60}
          onClick={handleFinish}
        />
      </Flex>

      <CustomButton
        label={"Cancel"}
        variant={"none"}
        color={"green"}
        width={"100%"}
        height={60}
        marginVertical={50}
        onClick={close}
      />

      <Flex direction="column" gap="sm" align={"center"}>
        {symptoms.map((symptom, index) => (
          <Text key={index}>{symptom}</Text>
        ))}
      </Flex>
    </Drawer>
  );
}
