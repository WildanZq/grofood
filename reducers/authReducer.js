import {
    SIGN_OUT,
    LOG_IN
} from '../actions/types';

const INITIAL_STATE = {
    userRole: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_OUT:
            return { ...state, userRole: null };
        case LOG_IN:
            return { ...state, userRole: action.payload.userRole };
        default: return state;
    }
}
