import {useContext, useState} from 'react';
import {Image, SafeAreaView} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import TextButton from '../components/TextButton';
import CommonStyles from '../styles/CommonStyle';

import Snackbar from 'react-native-snackbar';
import {BaseSnackBar, errorSnackBarStyle} from '../utils/BaseSnackBar';
import SecureInput from '../components/SecureInput';
import {AuthErrors, registerUser} from '../services/auth';
import {UserContext} from '../contexts/userContext';
import {errorPalette} from '../styles/colors';
import {LoadingContext} from '../contexts/loadingContext';

const ErrorSnackBar = title => {
  BaseSnackBar(title, errorSnackBarStyle);
};

function SignupScreen({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [user, setUser] = useContext(UserContext);
  const [loading, setLoading] = useContext(LoadingContext);

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
      return true; // if checks passed
    }
    return false; // if check failed
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
  const onSignUpSuccess = data => {
    setUser(data);
    setLoading(false);
  };

  const onSignUpError = error => {
    switch (error.code) {
      case AuthErrors.EmailAlreadyInUse:
        Snackbar.show(ErrorSnackBar('Email already in use'));
        break;
      case AuthErrors.InvalidEmail:
        Snackbar.show(ErrorSnackBar('Email is invalid'));
      default:
        Snackbar.show(ErrorSnackBar(error.code));
    }
    setLoading(false);
  };
  const signupButtonClick = () => {
    const passed = checkSignup();
    const user = {
      name,
      email,
      password,
    };
    if (!passed) return;

    setLoading(true);
    registerUser(user, {onSuccess: onSignUpSuccess, onError: onSignUpError});
    // navigation.navigate("Home")
    return;
  };
  return (
    <SafeAreaView style={CommonStyles.hCenteredContainer}>
      <Image
        style={CommonStyles.image}
        source={require('../assets/register.png')}
      />
      <Input placeHolder="Full name" value={name} onChangeText={onNameChange} />
      <Input placeHolder="Email" value={email} onChangeText={onEmailChange} />
      <SecureInput
        text={password}
        placeHolder="Password"
        onChangeText={onPasswordChange}
      />
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
