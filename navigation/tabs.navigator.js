import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendarAlt, faCog, faHome, faTachometerAlt, faUsers } from '@fortawesome/free-solid-svg-icons'

import CrewScreen from "../screens/crew/crew.screen";
import MoreScreen from "../screens/more/more.screen";
import HomeScreen from "../screens/home/home.screen";
import StatsScreen from "../screens/stats/stats.screen";
import EventsScreen from "../screens/events/events.screen";

const BottomTabs = createBottomTabNavigator();

export default () => {
    return (
        <BottomTabs.Navigator initialRouteName={'Events'}>
            <BottomTabs.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: () => { '' }, tabBarIcon: props => { return <FontAwesomeIcon size={props.size} icon={faHome} color={props?.focused ? 'skyblue' : 'gray'} /> } }} />
            <BottomTabs.Screen name="Events" component={EventsScreen} options={{ tabBarLabel: () => { '' }, tabBarIcon: props => { return <FontAwesomeIcon {...props} icon={faCalendarAlt} color={props?.focused ? 'skyblue' : 'gray'} /> } }} />
            <BottomTabs.Screen name="Stats" component={StatsScreen} options={{ tabBarLabel: () => { '' }, tabBarIcon: props => { return <FontAwesomeIcon {...props} icon={faTachometerAlt} color={props?.focused ? 'skyblue' : 'gray'} /> } }} />
            <BottomTabs.Screen name="Crew" component={CrewScreen} options={{ tabBarLabel: () => { '' }, tabBarIcon: props => { return <FontAwesomeIcon {...props} icon={faUsers} color={props?.focused ? 'skyblue' : 'gray'} /> } }} />
            <BottomTabs.Screen name="More" component={MoreScreen} options={{ tabBarLabel: () => { '' }, tabBarIcon: props => { return <FontAwesomeIcon {...props} icon={faCog} color={props?.focused ? 'skyblue' : 'gray'} /> } }} />
        </BottomTabs.Navigator>
    );
};