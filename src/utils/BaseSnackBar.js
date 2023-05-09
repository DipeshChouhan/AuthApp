import Snackbar from 'react-native-snackbar';
import { accentColor, primaryColor, ternaryColor, secondaryColor, errorPalette } from '../styles/colors';
const defaultStyle = {
  backgroundColor: primaryColor,
  textColor: ternaryColor,
  actionTextColor: accentColor
};

const errorSnackBarStyle = {
  backgroundColor: errorPalette.primaryColor,
  textColor: errorPalette.ternaryColor,
  actionTextColor: errorPalette.accentColor
};

function BaseSnackBar(title, style=defaultStyle) {
  return ({
    text: title,
    backgroundColor: style.backgroundColor,
    duration: Snackbar.LENGTH_LONG,
    textColor: style.textColor,
    action: {
      text: "HIDE",
      textColor: style.actionTextColor,
      onPress: () => {Snackbar.dismiss()}
    }
  });
}

export {BaseSnackBar, errorSnackBarStyle};
