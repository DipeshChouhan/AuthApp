import {accentColor} from '../styles/colors';
import InputStyles from '../styles/InputStyle';

const {useState} = require('react');
const {TextInput} = require('react-native');

function Input({placeHolder, value, onChangeText, ...rest}) {
  return (
    <TextInput
      style={InputStyles.base}
      value={value}
      placeholderTextColor={accentColor}
      onChangeText={txt => onChangeText(txt)}
      placeholder={placeHolder}
      {...rest}
    />
  );
}
export default Input;
