import {IssueActionTypes} from './issue.types';

const INITIAL_STATE = {
    issueList : []
}

const issueReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case IssueActionTypes.ADD_ISSUE:
            return {
                ...state,
                issueList : [...state.issueList, action.payload]
            }
        case IssueActionTypes.DELETE_ISSUE:
            return {
                ...state,
                issueList : state.issueList.filter(issue => issue.id !== action.payload)
            }
        case IssueActionTypes.DELETE_ALL_ISSUES:
            return {
                ...state,
                issueList : []
            }
        default:
            return state
    }
}

export default issueReducer;