import React from "react";
import { View } from "react-native";

import { useSelector } from "react-redux";

import EventList from "../../components/event-list.component";

const EventsScreen = () => {
    const events = useSelector(state => state.events.events);

    return (<View style={{ flex: 1 }}><EventList events={events} today={false} /></View>);
}

export default EventsScreen;