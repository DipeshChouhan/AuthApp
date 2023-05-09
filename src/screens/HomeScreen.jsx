import { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import Button from '../components/Button';
import { UserContext } from '../contexts/userContext';
import { logoutUser } from '../services/auth';
import { primaryColor } from '../styles/colors';
import CommonStyles from '../styles/CommonStyle';
function HomeScreen() {
  const [user, setUser] = useContext(UserContext);
  const onLogoutSuccess = () => {
    setUser(null);
  };

  const onLogoutError = error => {
    console.log(error);
  };
  const logoutButtonClick = () => {
    logoutUser({ onSuccess: onLogoutSuccess, onError: onLogoutError });
  };
  return (
    <View style={CommonStyles.hCenteredContainer}>
      <Image
        source={require('../assets/user.png')}
        style={[CommonStyles.image, { marginBottom: 16 }]}
      />
      <Text style={[CommonStyles.mediumText, { marginBottom: 16 }]}>
        {user?.name}
      </Text>
      <Button title={'Log out'} onButtonClick={logoutButtonClick} />
    </View>
  );
}

export default HomeScreen;
