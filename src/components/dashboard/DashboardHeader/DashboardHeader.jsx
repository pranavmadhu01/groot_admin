import { Flex } from "@mantine/core";
import { headerStyle } from "./dashboardheader.styles";

export default function DashboardHeader() {
  const { classes, cx } = headerStyle();
  return (
    <header className={classes.header}>
      <Flex>hello from header</Flex>
    </header>
  );
}
