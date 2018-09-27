import React, {Component} from 'react';
import {View, Text, Button, Image} from 'react-native';
import {createStackNavigator, StackNavigator} from 'react-navigation';


class LogoTitle extends Component {

    render() {
        return (
            <Image
                source={{uri: 'http://pic1.win4000.com/pic/1/9c/8798591244.jpg'}}
                style={{width: 30, height: 30}}
            />
        );

    }

}


class ModalScreen extends Component {

    render() {

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 30}}>This is a Modal</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Dismiss"
                />
            </View>
        )

    }

}

class HomeScreen extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    static navigationOptions = ({navigation}) => {

        const params = navigation.state.params || {};

        return {
            // title: "Home",
            headerTitle: <LogoTitle/>,
            headerRight: (<Button onPress={navigation.getParam("increaseCount", () => null)}
                                  title="+1"
                                  color='#fff'
            />),
            headerLeft: (<Button
                // onPress={() => navigation.navigate('MyModal')}
                onPress={() => this.props.navigation.navigate('Details')}
                title="Info"
                color="#fff"
            />),

        }
    };


    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen {this.state.count}</Text>
                <Button
                    title="Go to Detail"
                    onPress={() => {
                        this.props.navigation.navigate("Details",
                            {
                                itemId: 86,
                                otherParam: "anything you want here"
                            })
                    }}
                />
            </View>
        );
    }

    componentDidMount() {
        this.props.navigation.setParams({increaseCount: this._increaseCount})
    }

    _increaseCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    };
}

class DetailsScreen extends React.Component {
    // static navigationOptions = {
    //     title: "Details "
    // };

    static navigationOptions = ({navigation, navigationOptions}) => {
        return {
            title: navigation.getParam("otherParam", "A Nested Details Screen"),
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
        }
    };


    render() {
        let {navigation} = this.props;
        let itemId = navigation.getParam('itemId', 'NO-ID');
        let otherParam = navigation.getParam("otherParam", "some default value");

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details', {
                        itemId: Math.floor(Math.random() * 100),
                    })}
                />

                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
                />
            </View>
        );
    }

    componentDidMount() {
        console.log("DetailsScreen------")
    }
}

const MainStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Details: {
            screen: DetailsScreen,
        },
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

const RootStack = StackNavigator(
    {
        Main: {
            screen: MainStack,
        },
        MyModal: {
            screen: ModalScreen,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

export default class AnimatedApp extends React.Component {
    render() {
        return <RootStack/>;
    }
}

