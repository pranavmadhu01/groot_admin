import { createStyles, rem } from "@mantine/core";

const globalStyles = createStyles((theme) => ({
  title: {
    fontSize: "4rem",
    color: "#151810",
    fontFamily: "Gilroy-Bold",
    textAlign: "center",
  },

  description: {
    fontSize: "1.5rem",
    letterSpacing: '5%',
    color: "#151810",
    fontFamily: "Gilroy-Regular",
    textAlign: "center",
    display: 'inline-block',
  },
}));

export default globalStyles;