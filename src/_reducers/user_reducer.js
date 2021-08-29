import {
    LOGIN_USER
} from '../_actions/types';


export default function (state ={}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload} // loginSuccess 에 action.payload 를 넣어 주는 것임

            break;

        default:
            return state;
    }
}