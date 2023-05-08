import { useState } from 'react';
import { Image, SafeAreaView} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import TextButton from '../components/TextButton';
import CommonStyles from '../styles/CommonStyle';
function SignupScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onLoginClick = () => {
    navigation.navigate("Login");
    setPassword("");
  };

  const onNameChange = (changedName) => {
    setName(changedName);
  }

  const onEmailChange = (changedEmail) => {
    setEmail(changedEmail);
  }


  const onPasswordChange = (changedPassword) => {
    setPassword(changedPassword);
  }
  const signupButtonClick = () => {
    console.log("Sign Up Clicked");
  }
  return (
    <SafeAreaView style={CommonStyles.hCenteredContainer}>
      <Image
        style={CommonStyles.image}
        source={require('../assets/register.png')}
      />
      <Input placeHolder="Full name" value={name} onChangeText={onNameChange} />
      <Input placeHolder="Email" value={email} onChangeText={onEmailChange}/>
      <Input placeHolder="Password" value={password} secureTextEntry={true} onChangeText={onPasswordChange}/>
      <Button title="Sign up" onButtonClick={signupButtonClick}/>
      <TextButton
        text="Already got an account"
        buttonText="Log in"
        onButtonClick={onLoginClick}
      />
    </SafeAreaView>
  );
}

export default SignupScreen;
