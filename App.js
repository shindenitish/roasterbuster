import React, { useEffect } from 'react';
import SplashScreen from "react-native-splash-screen";

import { NavigationContainer } from '@react-navigation/native';

import BottomTabsNavigator from "./navigation/tabs.navigator";

const App = () => {
    useEffect(() => { SplashScreen.hide(); }, []);
    return (<NavigationContainer><BottomTabsNavigator /></NavigationContainer>);
};

export default App;
