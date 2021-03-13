import { UserActionTypes } from './user-types';

export const addUser = user => ({
    type : UserActionTypes.ADD_USER,
    payload : user
});

export const deleteUser = id => ({
    type : UserActionTypes.DELETE_USER,
    payload : id
});