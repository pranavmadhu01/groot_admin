"use client";
import DashboardHeader from "@/components/dashboard/DashboardHeader/DashboardHeader";
import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar/DashboardNavbar";
import { Flex } from "@mantine/core";
import { useEffect } from "react";

export default function DashboardLayout({ children }) {
  return (
    <Flex direction="row" style={{ height: "100vh" }}>
      <DashboardNavbar />
      <Flex direction="column" bg="orange" style={{ flex: "1" }}>
        <DashboardHeader />
        <div style={{ background: "red", flex: "inherit" }}>{children}</div>
      </Flex>
    </Flex>
  );
}
