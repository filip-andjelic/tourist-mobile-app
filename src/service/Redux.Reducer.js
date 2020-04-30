import {Types} from "./Redux.Actions";

const INITIAL_STATE = {
    firstName: undefined,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.loginSuccess:
            return {
                ...state,
                firstName: action.data.firstname,
            };

            break;
    }
}