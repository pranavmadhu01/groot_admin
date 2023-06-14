import { createStyles, rem } from "@mantine/core";

const footerStyles = createStyles((theme) => ({
  footerContainer: {
    backgroundColor: "#151810",
    flexDirection: "column",
    padding: "100px 156px",
    color: "#FAFBF9",
    alignItems: "center",
    gap: "15px",
  },

  logoTitle: {
    fontFamily: "Gilroy-Bold",
    fontSize: "36px",
    color: "#FAFBF9",
  },

  copyright: {
    fontFamily: "Gilroy-Medium",
    fontSize: "16px",
    color: "#FAFBF9",
  },
}));
export { footerStyles };
