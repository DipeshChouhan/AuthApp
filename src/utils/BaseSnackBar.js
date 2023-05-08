import Snackbar from 'react-native-snackbar';
import { accentColor, primaryColor, ternaryColor, secondaryColor } from '../styles/colors';
export default function BaseSnackBar(title) {

  return ({
    text: title,
    backgroundColor: primaryColor,
    duration: Snackbar.LENGTH_LONG,
    textColor: ternaryColor,
    action: {
      text: "HIDE",
      textColor: accentColor,
      onPress: () => {Snackbar.dismiss()}
    }
  });
}
