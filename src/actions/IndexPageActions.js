import * as actionTypes from '../constants/IndexPageConstants'

export function login(data) {
    return {
        type: actionTypes.ORANGE_INTERNAL_USERS,
        data
    }

}

export function choosePage(data) {
    return {
        type: actionTypes.CHOOSE_PAGE,
        data
    }
}