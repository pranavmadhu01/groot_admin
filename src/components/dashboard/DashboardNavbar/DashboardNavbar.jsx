import { useState } from "react";
import { Navbar, Group, Code, Image } from "@mantine/core";
import {
  IconChartHistogram,
  IconLogout,
  IconLeaf,
  IconMoneybag,
} from "@tabler/icons-react";

import { dashboardNavbarStyle } from "./dashboardnavbar.styles";
import Link from "next/link";
const data = [
  { link: "/dashboard", label: "Analytics", icon: IconChartHistogram },
  { link: "/dashboard/plant", label: "Plants", icon: IconLeaf },
  { link: "/dashboard/fertilizer", label: "Fertilizers", icon: IconMoneybag },
];
export function DashboardNavbar() {
  const { classes, cx } = dashboardNavbarStyle();
  const [active, setActive] = useState("Analytics");

  const links = data.map((item) => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      t
      href={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <Navbar height={"100%"} width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Image src="/assets/images/logo.png" height={50} width={"auto"} />
          <Code sx={{ fontWeight: 700 }}>v0.0</Code>
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <Link href="/" className={classes.link}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </Link>
      </Navbar.Section>
    </Navbar>
  );
}
