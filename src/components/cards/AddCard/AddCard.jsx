import { Flex, Text } from "@mantine/core";
import { addFertilizerCardStyle } from "./addcard.styles";
import { IconSquareRoundedPlusFilled } from "@tabler/icons-react";

export default function AddFertilizerCard({ name, onClick }) {
  const { classes, cx } = addFertilizerCardStyle();
  return (
    <Flex className={classes.header} onClick={onClick}>
      <Flex className={classes.card}>
        <Text fz="lg" fw={500}>
          Add Fertilizer
        </Text>
        <IconSquareRoundedPlusFilled />
      </Flex>
    </Flex>
  );
}
