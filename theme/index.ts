import { createTheme } from "@shopify/restyle";

const COLOR_PALLET = {
  primaryColor: "#62D6EE",
  mainBackgroundColor: "#070B12",
  secondaryBackgroundColor: "#111B2B",
  headerTextColor: "#FFFFFF",
  disabledTextColor: "#92969D",
  bodyTextColor: "#E7E8EA",
  btnBgColor: "#FFFFFF",
  black: "black",
  cardBgColor: "#0C131F",
};

const theme = createTheme({
  colors: {
    ...COLOR_PALLET,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    "2xl": 48,
    "3xl": 56,
    "4xl": 64,
  },
  textVariants: {
    header: {
      fontSize: 30,
      color: "headerTextColor",
      fontFamily: "SF_Bold",
    },
    subheader: {
      fontSize: 24,
      color: "headerTextColor",
      fontFamily: "SF_Medium",
    },
    body: {
      fontSize: 16,
      color: "bodyTextColor",
      fontFamily: "SF_Regular",
    },
    xs: {
      fontSize: 14,
      color: "bodyTextColor",
      fontFamily: "SF_Regular",
    },
    defaults: {
      fontSize: 15,
      color: "bodyTextColor",
      fontFamily: "SF_Regular",
    },
  },
});

export type Theme = typeof theme;
export default theme;
