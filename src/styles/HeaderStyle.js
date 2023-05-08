const { StyleSheet } = require("react-native");
const { accentColor, primaryColor } = require("./colors");

const HeaderStyle = StyleSheet.create({
  base: {
    backgroundColor: primaryColor,
  },
  title: {
    fontWeight: "bold",
    color: accentColor,
  }
});
export default HeaderStyle;
