import {accentColor} from '../styles/colors';
import InputStyles from '../styles/InputStyle';

const {TextInput} = require('react-native');

// <View style={{width: '100%', position: 'relative'}}>

// <TouchableOpacity
//   style={{
//     position: 'absolute',
//     right: 16,
//     top: '20%',
//   }} onPress>
//   <Image source={require('../assets/view.png')} style={{width: 24, height: 24}}></Image>
// </TouchableOpacity>
function Input({placeHolder, value, style, onChangeText, ...rest}) {
  return (
    <TextInput
      style={[InputStyles.base, style]}
      value={value}
      placeholderTextColor={accentColor}
      onChangeText={txt => onChangeText(txt)}
      placeholder={placeHolder}
      {...rest}
    />
  );
}
export default Input;
