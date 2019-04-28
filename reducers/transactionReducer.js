import {
    UPDATE_TRANSACTION
} from '../actions/types';

const INITIAL_STATE = {
    data: []
}

export default async (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_TRANSACTION:
            return { ...state, data: action.payload.data };
        default: return state;
    }
}
