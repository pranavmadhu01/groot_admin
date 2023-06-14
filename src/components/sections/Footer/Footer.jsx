import { Divider, Flex, Image, Text } from "@mantine/core";
import { footerStyles } from "./footer.styles";
import Leaves from "@/components/logos/Leaves";

export function Footer() {
  const { classes, cx } = footerStyles();

  return (
    <Flex className={classes.footerContainer}>
      <Flex style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <Leaves width={48} height={48} hasBorder={true} />
          <Text className={classes.logoTitle}>Groot</Text>
      </Flex>
      <Text className={classes.copyright}>Copyright © 2023  Groot</Text>
    </Flex>
  );
}
