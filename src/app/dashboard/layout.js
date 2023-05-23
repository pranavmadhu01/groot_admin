"use client";
import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar/DashboardNavbar";
import { Flex } from "@mantine/core";

export default function DashboardLayout({ children }) {
  return (
    <Flex direction="row" style={{ height: "100vh" }}>
      <DashboardNavbar />
      <Flex direction="column">
        <header></header>
        <div>{children}</div>
      </Flex>
    </Flex>
  );
}
