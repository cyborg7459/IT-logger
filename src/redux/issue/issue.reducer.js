import {IssueActionTypes} from './issue.types';

const INITIAL_STATE = {
    issues : []
}

const issueReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case IssueActionTypes.ADD_ISSUE:
            issues.push(action.payload)
            return {
                ...state
            }
        case IssueActionTypes.DELETE_ISSUE:
            return {
                ...state,
                issues : issues.filter(issue => issue.id !== action.payload)
            }
        case IssueActionTypes.DELETE_ALL_ISSUES:
            return {
                ...state,
                issues : []
            }
    }
}

export default issueReducer;