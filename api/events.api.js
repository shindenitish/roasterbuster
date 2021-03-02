import { Store } from "../redux/store";
import ApiService from "../services/api.service";
import { setEvents } from "../redux/events/events.action";

import Toast from 'react-native-simple-toast';

class EventsApi {

    async getEvents() {
        try {
            let events = await ApiService.get('https://rosterbuster.aero/wp-content/uploads/dummy-response.json');
            Store.dispatch(setEvents(events));
            Toast.show('Events updated', 1500);
        } catch (error) {
            console.log('Error (GET Events):', error.message);
            Toast.show('Unable to fetch latest events', 2000);
        }
    }
}

export default new EventsApi();