import { useState } from "react";
import { Header, Container, Group, Burger, Button, Text, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { homeHeaderStyles } from "./homeheader.styles";
import Leaves from "@/components/logos/Leaves";

const links = [
  { link: "#home", label: "Home" },
  { link: "#features", label: "Features" },
  { link: "#contact", label: "Contact Us" },
];

export function HomeHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = homeHeaderStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={120} mb={120} className={classes.headerWrapper}>
      <Container className={classes.header}>
        <Flex style={{flexDirection: 'row', gap: 10,}}>
          <Leaves width={40} height={40} hasBorder={true} />
          <Text className={classes.logoTitle}>Groot</Text>
        </Flex>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
        <Button
          radius="xl"
          variant="gradient"
          gradient={{ from: "#6EAF1F", to: "#9ECC66", deg: 30 }}
          className={cx(classes.button)}
          >
          Download
        </Button>
      </Container>
    </Header>
  );
}
