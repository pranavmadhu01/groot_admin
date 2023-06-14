import { createStyles, rem } from "@mantine/core";

const homeHeaderStyles = createStyles((theme) => ({
  header: {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "120px",
    width: "100%",
  },

  headerWrapper: {
    backgroundColor: "transparent",
    justifyContent: "center",
    display: "flex",
    backgroundColor: "rgba(110, 175, 31, 0.2)",
    backdropFilter: "blur(3px)",
    "-webkit-backdrop-filter": "blur(3px)",
    border: "none",
  },

  logoTitle: {
    fontFamily: "Gilroy-Bold",
    fontSize: "32px",
    color: "#FAFBF9",
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  button: {
    fontFamily: "Gilroy-SemiBold",
    letterSpacing: "0.5px",
    fontSize: "14px",
    padding: "10px 20px",
    borderRadius: "12px",
    textAlign: "center",
    height: "2.25rem",
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    fontSize: "18px",
    padding: "8px 20px",
    gap: "5px",
    textAlign: "center",
    borderRadius: theme.radius.xl,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : "white",
    opacity: 0.75,
    fontFamily: "Gilroy-SemiBold",

    "&:hover": {
      color: "#white",
      fontFamily: "Gilroy-SemiBold",
      opacity: 1,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: "white",
      fontFamily: "Gilroy-SemiBold",
      color: "#426913",
      opacity: 1,
    },
  },
}));
export { homeHeaderStyles };
