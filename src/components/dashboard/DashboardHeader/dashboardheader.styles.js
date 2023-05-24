import { createStyles } from "@mantine/core";
const headerStyle = createStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    minHeight: "60px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    padding: "10px",
  },
  breadCrumbs: {
    alignItems: "center",
  },
}));
export { headerStyle };
