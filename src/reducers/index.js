import {combineReducers} from 'redux';
import countReducer from './countReducer.js';
import loginInfo from './loginInfo';
import indexPageInfo from './indexPageInfo';

const rootReducer = combineReducers({
    count: countReducer,
    loginInfo,
    indexPageInfo,

});

export default rootReducer;