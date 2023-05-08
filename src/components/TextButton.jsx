const {View, Text, TouchableOpacity} = require('react-native');
import TextButtonStyle from '../styles/TextButtonStyle';

function TextButton({text, buttonText, onButtonClick}) {
  return (
    <View style={TextButtonStyle.base}>
      <Text style={TextButtonStyle.text}>{text}</Text>
      <TouchableOpacity onPress={onButtonClick}>
        <Text style={TextButtonStyle.button}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default TextButton;
