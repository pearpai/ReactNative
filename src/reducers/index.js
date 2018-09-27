import {combineReducers} from 'redux';
import countReducer from './countReducer.js';


const rootReducer = combineReducers({
    count: countReducer
});

export default rootReducer;