import {Types} from "./Redux.Actions";

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.loginSuccess:
            console.log(action);
            return {
                ...state,
                password: action.password,
                email: action.email,
            };

            break;
        default: {
            return {
                ...state
            }
        }
    }
}