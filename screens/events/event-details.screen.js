import React, { useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

import moment from 'moment';
import { get } from "lodash";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import EventStatus from "../../components/event-status.component";

import { getIcon, getDutyStatus } from "../../services/common.service";

const EventDetailsScreen = props => {
    const { route, navigation } = props;
    const event = get(route, 'params.event', {});

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: { elevation: 0, shadowOpacity: 0, backgroundColor: 'transparent' },
            headerTitle: () => (
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesomeIcon icon={getIcon(event?.DutyID)} />
                    <Text style={{ paddingLeft: 7, fontWeight: 'bold' }}>{getDutyStatus(event?.DutyID)}</Text>
                </View>
            )
        });
    }, [route, navigation]);

    return (
        <View style={styles.screen}>
            {/* Date */}
            <View style={[styles.section, { flex: 0.5 }]}>
                <Text style={styles.label}>Date</Text>
                <Text style={styles.data}>{moment(event.Date, 'DD/MM/YYYY').format('D MMMM YYYY')}</Text>
            </View>

            {/* Flight Details */}
            {
                (event?.DutyID == 'FLT' || event.DutyID == 'POS') ?
                    <View style={[styles.section, { flex: 1 }]}>
                        <View style={styles.column}>
                            <Text style={styles.label}>Flight No</Text>
                            <Text style={styles.data}>{event?.Flightnr || 'NA'}</Text>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.label}>Aircraft Type</Text>
                                <Text style={styles.data}>{event['Aircraft Type'] || 'NA'}</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.label}>Tail</Text>
                                <Text style={styles.data}>{event?.Tail || 'NA'}</Text>
                            </View>
                        </View>
                    </View> : null
            }

            {/* Duty Status */}
            <View style={[styles.section, { flex: 1 }]}>
                <EventStatus event={event} />
            </View>

            {/* Crew Details */}
            {
                (event?.DutyID == 'FLT' || event.DutyID == 'POS') ?
                    <View style={[styles.section, { flex: 1 }]}>

                        <View style={styles.column}>
                            <Text style={styles.label}>Captain</Text>
                            <Text style={styles.data}>{event?.Captain || 'NA'}</Text>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.label}>First Officer</Text>
                                <Text style={styles.data}>{event['First Officer'] || 'NA'}</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.label}>Flight Attendant</Text>
                                <Text style={styles.data}>{event['Flight Attendant'] || 'NA'}</Text>
                            </View>
                        </View>
                    </View> : null
            }
        </View>
    );
}

const styles = StyleSheet.create({
    label: { fontSize: 12 },
    data: { fontSize: 16, fontWeight: 'bold', color: '#01a2dd' },

    column: { flex: 1, alignItems: 'center' },
    row: { flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },

    screen: { flex: 1, marginHorizontal: 5, justifyContent: 'space-between', alignItems: 'center' },
    section: { borderWidth: 0.2, borderRadius: 3, width: '100%', margin: 2, padding: 2, alignItems: 'center', justifyContent: 'center' },

});

export default EventDetailsScreen;