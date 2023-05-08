import { accentColor, primaryColor, secondaryColor, ternaryColor } from "./colors";

const { StyleSheet } = require("react-native");

const InputStyles = StyleSheet.create({
  base: {
    width: "100%",
    fontSize: 18,
    color: primaryColor,
    backgroundColor: ternaryColor,
    padding: 8,
    borderBottomWidth: 2,
    borderBottomColor: secondaryColor,
    marginBottom: 24

  },

  themeOne: {
    backgroundColor: "#F15A59",
    color: accentColor,
    borderBottomColor: "#D21312",
  },
  secure: {
    width: "100%"
  }
})

export default InputStyles;
