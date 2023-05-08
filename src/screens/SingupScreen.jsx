import {useState} from 'react';
import {Image, SafeAreaView} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import TextButton from '../components/TextButton';
import CommonStyles from '../styles/CommonStyle';
import InputStyles from '../styles/InputStyle';

import Snackbar from 'react-native-snackbar';
import BaseSnackBar from '../utils/BaseSnackBar';
import SecureInput from '../components/SecureInput';

function SignupScreen({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const checkSignup = () => {
    if (name === '') {
      Snackbar.show(BaseSnackBar('Please provide Full Name'));
    } else if (email === '') {
      Snackbar.show(BaseSnackBar('Please provide Email'));
    } else if (password === '') {
      Snackbar.show(BaseSnackBar('Please provide Password'));
    } else if (password !== confirmPassword) {
      Snackbar.show(BaseSnackBar("Passwords don't match"));
      setConfirmPassword('');
    } else {
      setPassword('');
      setConfirmPassword('');
    }
  };

  const onLoginClick = () => {
    navigation.navigate('Login');
    setPassword('');
    setConfirmPassword('');
  };

  const onNameChange = changedName => {
    setName(changedName);
  };

  const onEmailChange = changedEmail => {
    setEmail(changedEmail);
  };

  const onPasswordChange = changedPassword => {
    setPassword(changedPassword);
  };

  const onConfirmPasswordChange = changedConfirmPassword => {
    setConfirmPassword(changedConfirmPassword);
  };
  const signupButtonClick = () => {
    checkSignup();
  };
  return (
    <SafeAreaView style={CommonStyles.hCenteredContainer}>
      <Image
        style={CommonStyles.image}
        source={require('../assets/register.png')}
      />
      <Input placeHolder="Full name" value={name} onChangeText={onNameChange} />
      <Input placeHolder="Email" value={email} onChangeText={onEmailChange} />
      <SecureInput text={password} placeHolder="Password" onChangeText={onPasswordChange} />
      <SecureInput
        text={confirmPassword}
    placeHolder="Confirm password"
        onChangeText={onConfirmPasswordChange}
      />
      <Button title="Sign up" onButtonClick={signupButtonClick} />
      <TextButton
        text="Already got an account"
        buttonText="Log in"
        onButtonClick={onLoginClick}
      />
    </SafeAreaView>
  );
}

export default SignupScreen;
