import { Store } from "../redux/store";
import ApiService from "../services/api.service";
import { setEvents } from "../redux/events/events.action";

class EventsApi {

    async getEvents() {
        try {
            let events = await ApiService.get('https://rosterbuster.aero/wp-content/uploads/dummy-response.json');
            Store.dispatch(setEvents(events));
        } catch (error) {
            console.log('Error (GET Events):', error);
        }
    }
}

export default new EventsApi();