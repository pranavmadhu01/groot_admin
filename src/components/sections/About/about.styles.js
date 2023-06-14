import { createStyles, rem } from "@mantine/core";

const aboutStyles = createStyles((theme) => ({
  aboutContainer: {
    backgroundColor: "#F3FFF2",
    flexDirection: "column",
    padding: "150px 156px",
    gap: "75px",
    color: "#151810",
  },

  textGroup: {
    flexDirection: "column",
    gap: 30,
  },

  heading: {
    fontSize: "64px",
    fontFamily: "Gilroy-Bold",
    textAlign: "center",
  },
  subheading: {
    fontSize: "40px",
    lineHeight: "56px",
    fontFamily: "Gilroy-SemiBold",
    textAlign: "center",
    width: "70%",
  },

  introContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
    flexDirection: "column",
  },
}));
export { aboutStyles };
