import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from "./root.reducer";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['events']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = createStore(persistedReducer);
export const Persistor = persistStore(Store);

export default { Store, Persistor };