import React, { useEffect } from "react";
import { View } from "react-native";

import { useSelector } from "react-redux";

import EventsApi from '../../api/events.api';
import EventList from "../../components/event-list.component";

const HomeScreen = () => {

    useEffect(() => { EventsApi.getEvents(); }, []);

    let events = useSelector(state => state.events.events);

    // events.push({
    //     Date: "1/03/2021",
    
    //     Flightnr: "MX78",
    //     AircraftType: "748-800E",
    //     Tail: "9878",

    //     Departure: "AMS",
    //     Destination: "ALC",
    //     Time_Depart: "11:35",
    //     Time_Arrive: "14:15",
    
    //     DutyID: "FLT",
    //     DutyCode: "FLIGHT",
    
    //     Captain: "Richard Versluis",
    //     FirstOfficer: "Jeroen Derwort",
    //     FlightAttendant: "Lucy Stone"
    // });

    return (
        <View style={{ flex: 1 }}>
            <EventList events={events} today={true} />
        </View>
    );
}

export default HomeScreen;