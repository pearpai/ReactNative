import {createStackNavigator} from 'react-navigation';
import Login from '../containers/login/Login';
import IndexPage from '../containers/index/IndexPage';

export default createStackNavigator({
        Login: Login,
        IndexPage: IndexPage,
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none',
    }
);