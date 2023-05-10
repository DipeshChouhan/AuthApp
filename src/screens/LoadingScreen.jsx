const {View, Text} = require('react-native');
import { accentColor, primaryColor } from '../styles/colors';
import CommonStyles from '../styles/CommonStyle';

function LoadingScreen() {
  return (
    <View style={[CommonStyles.centredContainer, {backgroundColor: primaryColor}]}>
      <Text style={{color: accentColor, fontSize: 24}}>Wait a second...</Text>
    </View>
  );
}
export default LoadingScreen;
