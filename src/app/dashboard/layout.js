"use client";
import DashboardHeader from "@/components/dashboard/DashboardHeader/DashboardHeader";
import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar/DashboardNavbar";
import { Flex } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

export default function DashboardLayout({ children }) {
  return (
    <Flex direction="row" style={{ height: "100vh" }}>
      <DashboardNavbar />
      <Flex
        direction="column"
        align="unset"
        style={{ flex: "1", padding: "10px", gap: "10px" }}
      >
        <DashboardHeader />
        <div
          style={{
            flex: "inherit",
            background: "#fff",
            width: "100% ",
            padding: "10px",
            borderRadius: "10px",
            overflow: "auto",
          }}
          size="xl"
        >
          {children}
        </div>
      </Flex>
      <Notifications position="bottom-left"/>
    </Flex>
  );
}
