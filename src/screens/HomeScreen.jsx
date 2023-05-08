import {View, Text, Image} from 'react-native';
import Button from '../components/Button';
import { primaryColor } from '../styles/colors';
import CommonStyles from '../styles/CommonStyle';
function HomeScreen() {
  const logoutButtonClick = () => {
    console.log("log out button click");
  }
  return <View style={CommonStyles.hCenteredContainer}>
    <Image source={require('../assets/user.png')} style={[CommonStyles.image, {marginBottom: 16}]} />
    <Text style={[CommonStyles.mediumText, {marginBottom: 16}]}>{"Dipesh Chouhan"}</Text>
    <Button title={"Log out"} onButtonClick={logoutButtonClick}/>
  </View>;
}

export default HomeScreen;
