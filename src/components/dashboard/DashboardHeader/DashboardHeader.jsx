import { Breadcrumbs, Flex, Image, Text } from "@mantine/core";
import { headerStyle } from "./dashboardheader.styles";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function DashboardHeader() {
  const { classes, cx } = headerStyle();
  const pathname = usePathname();
  console.log(pathname.split("/").join("/"));
  const items = pathname.split("/").map((item, index) => (
    <Link
      href={pathname
        .split("/")
        .slice(0, index + 1)
        .join("/")}
      key={index}
    >
      {item}
    </Link>
  ));
  return (
    <header className={classes.header}>
      <Flex direction="column">
        <Text fz="md" fw={700} transform="uppercase">
          {pathname.split("/")[pathname.split("/").length - 1]}
        </Text>
        <Breadcrumbs
          separator={<Image src="/assets/images/leaves.png" width={10} />}
          mt="xs"
          display="flex"
          className={classes.breadCrumbs}
        >
          {items}
        </Breadcrumbs>
      </Flex>
    </header>
  );
}
