import { createStyles, rem } from "@mantine/core";

const featureStyles = createStyles((theme) => ({
  heading: {
    fontSize: "56px",
    fontFamily: "Gilroy-Bold",
    textAlign: "left",
  },
  subheading: {
    fontSize: "40px",
    lineHeight: "56px",
    fontFamily: "Gilroy-SemiBold",
    textAlign: "left",
  },
  description: {
    fontSize: "28px",
    fontFamily: "Gilroy-Medium",
    textAlign: "left",
  },

  featureInfo: {
    justifyContent: "center",
    alignSelf: "center",
    gap: "30px",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  },

  featureWrapper: {
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    alignItems: "flex-start",
    paddingLeft: "10px",
  },
}));
export { featureStyles };
