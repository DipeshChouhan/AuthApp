import {Image, SafeAreaView} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import CommonStyles from '../styles/CommonStyle';
import TextButton from '../components/TextButton';
import {useState} from 'react';
import SecureInput from '../components/SecureInput';
import BaseSnackBar from '../utils/BaseSnackBar';

import Snackbar from 'react-native-snackbar';

function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const checkLogin = () => {
    if (email === "") {
      Snackbar.show(BaseSnackBar("Please provide email"));
    } else if (password === "") {
      Snackbar.show(BaseSnackBar("Please provide password"));
    } else {
      setPassword("");
    }
  }

  const onEmailChange = changedEmail => {
    setEmail(changedEmail);
  };
  const onPasswordChange = changedPassword => {
    setPassword(changedPassword);
  };

  const onSignUpClick = () => {
    setPassword('');
    navigation.navigate('Signup');
  };

  const loginButtonClick = () => {
    checkLogin();
  };
  return (
    <SafeAreaView style={CommonStyles.hCenteredContainer}>
      <Image
        style={CommonStyles.image}
        source={require('../assets/account.png')}
      />
      <Input placeHolder="Email" value={email} onChangeText={onEmailChange} />
      <SecureInput text={password} onChangeText={onPasswordChange} placeHolder="Password" />
      <Button title="Login" onButtonClick={loginButtonClick} />
      <TextButton
        text="Don't have an account?"
        buttonText="Sign up"
        onButtonClick={onSignUpClick}
      />
    </SafeAreaView>
  );
}

export default LoginScreen;

// <Input
//   placeHolder="Password"
//   value={password}
//   secureTextEntry={true}
//   onChangeText={onPasswordChange}
// />
