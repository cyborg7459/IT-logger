import { UserActionTypes } from './user-types';

const INITIAL_STATE = {
    userList : [{name : 'Shreuash'}]
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.ADD_USER:
            return {
                ...state, 
                userList : [...state.userList, action.payload]
            }
        case UserActionTypes.DELETE_USER:
            return {
                ...state,
                userList : state.userList.filter(user => user.id !== action.payload)
            }
        default:
            return state;
    }
}

export default userReducer;