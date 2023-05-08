const { StyleSheet } = require("react-native");
const { primaryColor, accentColor, secondaryColor } = require("./colors");

const ButtonStyles = StyleSheet.create({
  base: {
    width: "100%",
    alignItems: "center",
    backgroundColor: secondaryColor,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  text: {
    color: accentColor,
    fontSize: 16,
    fontWeight: "bold",
  }
})
export default ButtonStyles;
