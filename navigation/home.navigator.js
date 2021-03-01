import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

import HomeScreen from "../screens/home/home.screen";
import EventDetailsScreen from "../screens/events/event-details.screen";

export default () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: true }} />
            <HomeStack.Screen name="EventDetails" component={EventDetailsScreen} />
        </HomeStack.Navigator>
    );
}