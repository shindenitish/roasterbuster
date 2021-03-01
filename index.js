import React from 'react';
import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';

import App from './App';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { Store, Persistor } from "./redux/store";

const RootApp = () => {
    return (<Provider store={Store}><PersistGate loading={null} persistor={Persistor}><App /></PersistGate></Provider>);
}

AppRegistry.registerComponent(appName, () => RootApp);
