import {Types} from "./Redux.Actions";

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.loginSuccess:
            return {
                ...state,
                email: action.email,
                entries: data.entries,
                firstName: data.firstName,
                lastName: data.lastName,
                isHost: data.isHost,
                messages: data.messages,
                photoUrl: data.photoUrl,
                rating: data.rating,
                token: data.token
            };
        case Types.signupSuccess:
            return{
                ...state,
                email: action.email,
                password: action.password
            }
        default: {
            return {
                ...state
            }
        }
    }
}