import 'react-native-gesture-handler';

import React from 'react';
import { AppRegistry } from 'react-native';

import { enableScreens } from 'react-native-screens';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { name as appName } from './app.json';
import { Store, Persistor } from "./redux/store";

enableScreens();

const RootApp = () => {
    return (
        <Provider store={Store}>
            <PersistGate loading={null} persistor={Persistor}>
                <App />
            </PersistGate>
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => RootApp);
