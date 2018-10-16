import * as actionType from '../constants/IndexPageConstants';

const initialState = {
    indexTab: [
        {
            badge: 0,
            icon: "apps",
            title: "首页"
        }, {
            badge: 0,
            icon: "camera",
            title: "图书馆"
        },
        {
            badge: 0,
            icon: "navigate",
            title: "鱼跃号"
        },
        {
            badge: 0,
            icon: "person",
            title: "我的"
        },

    ]
};

export default function loginInfo(state = initialState, action) {
    switch (action.type) {

        case actionType.ORANGE_INTERNAL_USERS:
            return action.data;

        case actionType.CHOOSE_PAGE:
            return action.data;

        default:
            return state;

    }
}