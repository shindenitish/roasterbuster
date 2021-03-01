import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendarAlt, faCog, faHome, faTachometerAlt, faUsers } from '@fortawesome/free-solid-svg-icons'

import CrewScreen from "../screens/crew/crew.screen";
import MoreScreen from "../screens/more/more.screen";
import StatsScreen from "../screens/stats/stats.screen";

import HomeNavigator from "./home.navigator";
import EventsNavigator from "./events.navigator";

const BottomTabs = createBottomTabNavigator();

export default () => {
    return (
        <BottomTabs.Navigator>
            <BottomTabs.Screen name="Home" component={HomeNavigator} options={{ tabBarLabel: () => { '' }, tabBarIcon: props => { return <FontAwesomeIcon size={props.size} icon={faHome} color={props?.focused ? '#01a2dd' : 'gray'} /> } }} />
            <BottomTabs.Screen name="Events" component={EventsNavigator} options={{ tabBarLabel: () => { '' }, tabBarIcon: props => { return <FontAwesomeIcon {...props} icon={faCalendarAlt} color={props?.focused ? '#01a2dd' : 'gray'} /> } }} />
            <BottomTabs.Screen name="Stats" component={StatsScreen} options={{ tabBarLabel: () => { '' }, tabBarIcon: props => { return <FontAwesomeIcon {...props} icon={faTachometerAlt} color={props?.focused ? '#01a2dd' : 'gray'} /> } }} />
            <BottomTabs.Screen name="Crew" component={CrewScreen} options={{ tabBarLabel: () => { '' }, tabBarIcon: props => { return <FontAwesomeIcon {...props} icon={faUsers} color={props?.focused ? '#01a2dd' : 'gray'} /> } }} />
            <BottomTabs.Screen name="More" component={MoreScreen} options={{ tabBarLabel: () => { '' }, tabBarIcon: props => { return <FontAwesomeIcon {...props} icon={faCog} color={props?.focused ? '#01a2dd' : 'gray'} /> } }} />
        </BottomTabs.Navigator>
    );
};