import { TextInput, Flex, Drawer, LoadingOverlay, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import CustomButton from "@/components/elements/CustomButton";
import { useState } from "react";

export default function AddPrecautionDrawer({ opened, close }) {
  const [visible, { toggle }] = useDisclosure(false);
  const [value, setValue] = useState("");
  const [precautions, setPrecautions] = useState([]);

  const handlePrecautionAdd = () => {
    if (value) {
      setPrecautions([...precautions, value]);
      setValue("");
    }
  };

  const handleFinish = () => {
    close(precautions);
  };

  return (
    <Drawer
      opened={opened}
      onClose={close}
      title="ADD PRECAUTIONS"
      position="right"
    >
      <LoadingOverlay visible={visible} overlayBlur={2} />
      <TextInput
        label="Precaution"
        placeholder="Enter the precaution"
        mb={30}
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Flex gap={10}>
        <CustomButton
          label={"Add Next Precaution"}
          type={"button"}
          variant={"outline"}
          color={"green"}
          borderColor={"green"}
          width={"100%"}
          height={60}
          onClick={handlePrecautionAdd}
        />
        <CustomButton
          label={"Finish"}
          type={"button"}
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
        {precautions.map((symptom, index) => (
          <Text key={index}>{symptom}</Text>
        ))}
      </Flex>
    </Drawer>
  );
}
