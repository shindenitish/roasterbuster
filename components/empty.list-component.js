import React from "react";
import { Text, View } from "react-native";

import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const EmptyList = () => {
    return (
        <View style={{ flex: 1, marginTop: '50%', justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesomeIcon size={50} icon={faCalendar} />
            <Text>There are no events available.</Text>
        </View>
    );
}

export default EmptyList;