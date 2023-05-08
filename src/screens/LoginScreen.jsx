import {Image, SafeAreaView} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import CommonStyles from '../styles/CommonStyle';
import TextButton from '../components/TextButton';
import { useState } from 'react';

function LoginScreen({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (changedEmail) => {

    setEmail(changedEmail);
  }
  const onPasswordChange = (changedPassword) => {
    setPassword(changedPassword);
  }

  const onSignUpClick = () => {
    setPassword("");
    navigation.navigate('Signup');
  };

  const loginButtonClick = () => {
    console.log("login button click");
  }
  return (
    <SafeAreaView style={CommonStyles.hCenteredContainer}>
      <Image
        style={CommonStyles.image}
        source={require('../assets/account.png')}
      />
      <Input placeHolder="Email" value={email} onChangeText={onEmailChange}/>
      <Input placeHolder="Password" value={password} secureTextEntry={true} onChangeText={onPasswordChange}/>
      <Button title="Login" onButtonClick={loginButtonClick}/>
      <TextButton
        text="Don't have an account?"
        buttonText="Sign up"
        onButtonClick={onSignUpClick}
      />
    </SafeAreaView>
  );
}

export default LoginScreen;
