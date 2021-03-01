import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

const EventsStack = createStackNavigator();

import EventsScreen from "../screens/events/events.screen";
import EventDetailsScreen from "../screens/events/event-details.screen";

export default () => {
    return (
        <EventsStack.Navigator>
            <EventsStack.Screen name="Events" component={EventsScreen} />
            <EventsStack.Screen name="EventDetails" component={EventDetailsScreen} />
        </EventsStack.Navigator>
    );
}