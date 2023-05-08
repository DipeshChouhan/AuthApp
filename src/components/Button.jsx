const {TouchableOpacity, Text} = require('react-native');

const {default: ButtonStyles} = require('../styles/ButtonSytle');

function Button({title, onButtonClick}) {
  return (
    <TouchableOpacity style={ButtonStyles.base} onPress={onButtonClick}>
      <Text style={ButtonStyles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
