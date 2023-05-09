/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext, useEffect, useState } from 'react';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SingupScreen';
import { accentColor } from './src/styles/colors';
import HeaderStyle from './src/styles/HeaderStyle';
import auth from '@react-native-firebase/auth';
import { getUser } from './src/services/auth';
import { UserContext, UserProvider } from './src/contexts/userContext';

const Stack = createNativeStackNavigator();
function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useContext(UserContext);

  const getUserSuccess = userData => {
    setUser(userData);
    setLoading(false);
  };

  const getUserError = error => {
    console.log(error);
  };

  function onAuthStateChanged(user) {
    if (user) {
      getUser(user.uid, { onSuccess: getUserSuccess, onError: getUserError });
    } else {
      // setUser(user);
      setLoading(false);
    }
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  if (loading) return null;
  console.log(user);

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
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Login" component={LoginScreen} />
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
