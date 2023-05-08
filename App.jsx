/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SingupScreen';
import HeaderStyle from './src/styles/HeaderStyle';

const Stack = createNativeStackNavigator();
function App() {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Login" screenOptions={{headerStyle: HeaderStyle.base, headerTitleStyle: HeaderStyle.title}}>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Signup" component={SignupScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
}


export default App;
