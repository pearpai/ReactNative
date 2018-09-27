/** @format */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

// import AnimatedApp from './AnimatedApp';
import {Provider} from 'react-redux';
import {store} from './src/store/configureStore';
import Counter from './src/components/Counter';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Counter/>
            </Provider>
        );
    }
}




AppRegistry.registerComponent(appName, () =>
    App
);
