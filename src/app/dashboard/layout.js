"use client";
import DashboardHeader from "@/components/dashboard/DashboardHeader/DashboardHeader";
import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar/DashboardNavbar";
import { Container, Flex } from "@mantine/core";

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
          }}
          size="xl"
        >
          {children}
        </div>
      </Flex>
    </Flex>
  );
}
