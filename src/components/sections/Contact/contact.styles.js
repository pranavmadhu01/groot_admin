import { createStyles, rem } from "@mantine/core";

const contactStyles = createStyles((theme) => ({
  contactContainer: {
    backgroundColor: "#9ECC66",
    flexDirection: "column",
    padding: "100px 156px",
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
    textAlign: "left",
    width: "100%",
  },
  phone: {
    fontSize: "32px",
    fontFamily: "Gilroy-SemiBold",
    textAlign: "left",
    width: "100%",
  },

  contactDetails: {
    flexDirection: 'column',
    width: "100%",
  },

  contactWrapper: {
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
    width: "100%",
  },
}));
export { contactStyles };
