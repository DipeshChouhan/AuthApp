/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { UserProvider } from './src/contexts/userContext';
import Wrapper from './src/Wrapper';

AppRegistry.registerComponent(appName, () => Wrapper);
