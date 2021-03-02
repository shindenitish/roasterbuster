import React, { useState } from "react";
import { Text, StyleSheet, SectionList } from "react-native";

import moment from "moment";
import 'moment-duration-format';

import { sortBy, isEmpty, groupBy } from "lodash";

import EventsApi from "../api/events.api";

import EventItem from "./event-item.component";
import EmptyList from "./empty.list-component";

const EventList = props => {
    let { events, today } = props;
    const [refreshing, setRefreshing] = useState(false);

    if (isEmpty(events)) {
        events = [];
    }

    if (today) {
        events = events.filter(e => { return moment(e.Date, 'DD/MM/YYYY').isSame(moment(), 'day') });
    }

    events = sortBy(events, e => { return moment(e.Date, 'DD/MM/YYYY') }).reverse();
    const sectionedList = Object.keys(groupBy(events, 'Date')).map(key => { return { title: key, data: groupBy(events, 'Date')[key] } });

    return (
        <SectionList
            windowSize={10}
            initialNumToRender={5}
            maxToRenderPerBatch={10}

            sections={sectionedList}
            style={{ flex: 1, width: '100%' }}

            refreshing={refreshing}
            onRefresh={async () => {
                setRefreshing(true);
                await EventsApi.getEvents();
                setRefreshing(false);
            }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(item) => <EventItem event={item?.item} />}
            ListEmptyComponent={< EmptyList today/>}
            renderSectionHeader={({ section: { title } }) => (<Text style={today ? styles.todayEvents : styles.allEvents}>{moment(title, 'DD/MM/YYYY').calendar({ sameDay: today ? '[Upcoming Events]' : 'ddd D MMM YYYY ([Today])', lastDay: 'ddd D MMM YYYY', sameElse: 'ddd D MMM YYYY', nextDay: 'ddd D MMM YYYY ([Tomorrow])' })}</Text>)}
        />
    );
}

const styles = StyleSheet.create({
    allEvents: {
        fontSize: 14,
        paddingLeft: 10,
        color: '#01a2dd',
        fontWeight: 'bold',
        backgroundColor: "lightgray",
        borderBottomWidth: 0.3
    },
    todayEvents: {
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#01a2dd',
        borderBottomWidth: 0.3
    }
});

export default EventList;
