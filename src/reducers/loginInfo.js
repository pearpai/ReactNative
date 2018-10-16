import * as actionType from '../constants/LoginConstants';

const initialState = {
    userInfo: {}
};

export default function loginInfo(state = initialState, action) {
    switch (action.type) {

        case actionType.LOGIN:
            return action.data;
        default:
            return state;

    }
}