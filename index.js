/** @format */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

// import AnimatedApp from './AnimatedApp';
import {Provider} from 'react-redux';
import {store} from './src/store/configureStore';
import Counter from './src/components/Counter';
import Login from './src/containers/login/Login';
import IndexNavigator from './src/navigation/IndexNavigator';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <IndexNavigator/>
            </Provider>
        );
    }
}


AppRegistry.registerComponent(appName, () =>
    App
);
