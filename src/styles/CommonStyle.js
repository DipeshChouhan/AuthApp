import { primaryColor } from "./colors";

const { StyleSheet } = require("react-native");

const CommonStyles = StyleSheet.create({

  hCenteredContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 32,
    paddingTop: 64
    
  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 32
  },
  mediumText: {
    color: primaryColor,
    fontSize: 16
  }
  

})

export default CommonStyles;
