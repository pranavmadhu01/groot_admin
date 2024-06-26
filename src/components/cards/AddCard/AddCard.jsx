import { Flex, Text } from "@mantine/core";
import { addCardStyle } from "./addcard.styles";
import { IconSquareRoundedPlusFilled } from "@tabler/icons-react";

export default function AddCard({ name, onClick }) {
  const { classes, cx } = addCardStyle();
  return (
    <Flex
      className={classes.header}
      onClick={onClick}
      style={{ position: "sticky", top: "0", zIndex: 1 }}
    >
      <Flex className={classes.card}>
        <Text fz="lg" fw={500}>
          {name}
        </Text>
        <IconSquareRoundedPlusFilled />
      </Flex>
    </Flex>
  );
}
