import React from "react";
import { View, Text, StyleSheet } from "react-native";

import moment from "moment";
import 'moment-duration-format';

import { getIcon } from "../services/common.service";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';

const EventStatus = props => {

    const { event } = props;

    const getDuration = () => {
        switch (event.DutyID) {
            case 'FLT':
            case 'OFD':
            case 'POS': return moment.duration(moment(event.Time_Arrive, 'HH:mm').diff(moment(event.Time_Depart, 'HH:mm'))).format("D [days], H [hrs] m [mins]");
            case 'SBY': return event.Time_Depart + ' - ' + event.Time_Arrive;
            case 'DO': return 'All day'
            default: return 'NA';
        }
    }

    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            {/* Departure */}
            {
                (event?.DutyID == 'FLT' || event?.DutyID == 'POS') ?
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <FontAwesomeIcon icon={faPlaneDeparture} />
                        <Text style={styles.data}>{event?.Departure}</Text>
                        <Text style={styles.data}>{event?.Time_Depart}</Text>
                    </View> : null
            }

            {/* Event Duration */}
            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesomeIcon size={35} transform={{ rotate: event?.DutyID == 'FLT' ? -45 : 0 }} icon={getIcon(event?.DutyID)} />
                {(event?.DutyID != 'FLT' && event?.DutyID != 'POS') ? <Text style={styles.data}>{event?.Destination}</Text> : null}
                <Text style={styles.data}>{getDuration()}</Text>
            </View>

            {/* Arrival */}
            {
                (event?.DutyID == 'FLT' || event?.DutyID == 'POS') ?
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <FontAwesomeIcon icon={faPlaneArrival} />
                        <Text style={styles.data}>{event?.Destination}</Text>
                        <Text style={styles.data}>{event?.Time_Arrive}</Text>
                    </View> : null
            }
        </View>
    );

}

const styles = StyleSheet.create({ data: { fontSize: 16, fontWeight: 'bold', color: '#01a2dd' } });

export default EventStatus;