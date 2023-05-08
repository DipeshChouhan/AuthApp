const {useState} = require('react');
const {View, TouchableOpacity, Image} = require('react-native');
const {default: InputStyles} = require('../styles/InputStyle');
const {default: Input} = require('./Input');

function SecureInput({text, placeHolder, onChangeText}) {
  const [secureEntry, setSecureEntry] = useState(true);
  let icon = secureEntry
    ? require('../assets/view.png')
    : require('../assets/hide.png');
  const onSecurePress = () => {
    setSecureEntry(!secureEntry);
  };

  return (
    <View style={InputStyles.secure}>
      <Input
        placeHolder={placeHolder}
        value={text}
        secureTextEntry={secureEntry}
        onChangeText={onChangeText}
      />

      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 16,
          top: '18%',
        }}
        onPress={onSecurePress}>
        <Image source={icon} style={{width: 24, height: 24}}></Image>
      </TouchableOpacity>
    </View>
  );
}

export default SecureInput;
