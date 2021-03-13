import { UserActionTypes } from './user-types';

const INITIAL_STATE = {
    users : []
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.ADD_USER:
            state.users.push(action.payload);
            return state;
        case UserActionTypes.DELETE_USER:
            return {
                ...state,
                users : state.users.filter(user => user.id !== action.payload)
            }
        default:
            return state;
    }
}

export default userReducer;