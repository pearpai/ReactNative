import * as actionTypes from '../constants/LoginConstants'

export function login(data) {
    return {
        type: actionTypes.LOGIN,
        data
    }

}