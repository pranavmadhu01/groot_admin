import { useState } from "react";
import { Header, Container, Group, Burger, Image, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { homeHeaderStyles } from "./homeheader.styles";
import { IconBrandGooglePlay } from "@tabler/icons-react";

const links = [
  { link: "#feature", label: "Features" },
  { link: "#about", label: "About" },
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
    <Header height={60} mb={120}>
      <Container className={classes.header}>
        <Image src="/assets/images/logo.png" height={50} width={"auto"} />
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
          h={30}
          gradient={{ from: "#6EAF1F", to: "#9ECC66", deg: 105 }}
          className={cx(classes.button)}
          >
          Download
        </Button>
      </Container>
    </Header>
  );
}
