import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabsNavigator from "./navigation/tabs.navigator";

const App = () => (<NavigationContainer><BottomTabsNavigator /></NavigationContainer>);

export default App;
