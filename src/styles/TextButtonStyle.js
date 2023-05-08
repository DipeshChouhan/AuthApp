import { primaryColor, ternaryColor, accentColor } from "./colors";

const { StyleSheet } = require("react-native");

const TextButtonStyle = StyleSheet.create({
  base:{
    flexDirection: "row",
    marginTop: 16
  },
  text: {
    color: primaryColor,
    fontWeight: "bold",
    fontSize: 15
  },
  button: {
    color: accentColor,
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 4
  }
});
export default TextButtonStyle;
