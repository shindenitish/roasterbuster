const INITIAL_STATE = { events: [] };

const EventsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_EVENTS': return { ...state, events: action.payload };
        case 'RESET_STORE': return INITIAL_STATE;
        default: return state;
    }
}

export default EventsReducer;