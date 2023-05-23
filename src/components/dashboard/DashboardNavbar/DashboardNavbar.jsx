"use client";
import { useState } from "react";
import { Navbar, Group, Code, Image } from "@mantine/core";
import {
  IconChartHistogram,
  IconLogout,
  IconLeaf,
  IconMoneybag,
} from "@tabler/icons-react";

import { dashboardNavbarStyle } from "./dashboardnavbar.styles";
const data = [
  { link: "", label: "Analytics", icon: IconChartHistogram },
  { link: "", label: "Plants", icon: IconLeaf },
  { link: "", label: "Fertilizers", icon: IconMoneybag },
];
export function DashboardNavbar() {
  const { classes, cx } = dashboardNavbarStyle();
  const [active, setActive] = useState("Analytics");

  const links = data.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Navbar height={"100%"} width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          {/* <MantineLogo size={28} /> */}
          <Image src="/assets/images/logo.png" height={50} width={'auto'}/>
          <Code sx={{ fontWeight: 700 }}>v0.0</Code>
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}
