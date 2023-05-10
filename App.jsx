/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext, useEffect} from 'react';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SingupScreen';
import {accentColor} from './src/styles/colors';
import HeaderStyle from './src/styles/HeaderStyle';
import auth from '@react-native-firebase/auth';
import {getUser} from './src/services/auth';
import {UserContext} from './src/contexts/userContext';
import Snackbar from 'react-native-snackbar';
import {BaseSnackBar, errorSnackBarStyle} from './src/utils/BaseSnackBar';
import {LoadingContext} from './src/contexts/loadingContext';
import LoadingScreen from './src/screens/LoadingScreen';

const Stack = createNativeStackNavigator();
function App() {
  const [loading, setLoading] = useContext(LoadingContext);
  const [user, setUser] = useContext(UserContext);

  const getUserSuccess = userData => {
    if (userData) {
      setUser(userData);
      setLoading(false);
    }
  };

  const getUserError = error => {
    Snackbar.show(BaseSnackBar(error.code, errorSnackBarStyle));
    setLoading(false);
  };

  function onAuthStateChanged(currentUser) {
    if (currentUser) {
      getUser(currentUser.uid, {
        onSuccess: getUserSuccess,
        onError: getUserError,
      });
    } else {
      setLoading(false);
    }
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: HeaderStyle.base,
          headerTitleStyle: HeaderStyle.title,
          headerTintColor: accentColor,
        }}>
        {user ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
