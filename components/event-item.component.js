import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import moment from "moment";
import 'moment-duration-format';

import { useNavigation } from '@react-navigation/native';

import { getIcon, getDutyStatus } from "../services/common.service";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

getTiming = (event) => {
    switch (event.DutyID) {
        case 'POS':
        case 'FLT': return event.Time_Depart + ' - ' + event.Time_Arrive;
        case 'DO': return 'All day';
        case 'SBY': return moment(event.Time_Depart, 'HH:mm:ss').format('HH:mm') + ' - ' + moment(event.Time_Arrive, 'HH:mm:ss').format('HH:mm');
        case 'OFD': return moment.duration(moment(event.Time_Arrive, 'HH:mm').diff(moment(event.Time_Depart, 'HH:mm'))).format("D [days], H [hrs] m [mins]");
        default: return 'NA';
    }
}

const EventItem = props => {
    const { event } = props;
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{ flex: 1 }} onPress={() => { navigation.navigate('EventDetails', { event }) }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.3, padding: 5 }}>
                {/* Event Status Icon */}
                <View style={{ flex: 1, paddingLeft: 5 }}><FontAwesomeIcon transform={{ rotate: event?.DutyID == 'FLT' ? -45 : 0 }} icon={getIcon(event?.DutyID)}></FontAwesomeIcon></View>

                {/* Event Details */}
                <View style={{ flex: 5 }}>{
                    <View style={{ flex: 1 }}>
                        {
                            (event?.DutyID == 'FLT' || event?.DutyID == 'POS') ?
                                <Text style={{ fontWeight: 'bold' }}>{event?.Departure + ' - ' + event?.Destination}</Text>
                                :
                                <Text style={{ fontWeight: 'bold' }}>{event?.Destination}</Text>
                        }
                        <Text>{getDutyStatus(event?.DutyID)}</Text>
                    </View>
                }
                </View>

                {/* Event Timing */}
                <Text style={{ flex: 3, textAlign: 'right', color: '#01a2dd' }}>{getTiming(event)}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default EventItem;