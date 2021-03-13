import {IssueActionTypes} from './issue.types';

const INITIAL_STATE = {
    issueList : [{
        title : 'Changed network card in server 007',
        user : 'Sam Smith',
        updated : Date.now(),
        needsAttention : false
    }, {
        title : '1122 wireless down',
        user : 'Sara Wilson',
        updated : Date.now(),
        needsAttention : true
    }, {
        title : 'Changed network card in server 007',
        user : 'Sam Smith',
        updated : Date.now(),
        needsAttention : true
    }, {
        title : '1122 wireless down',
        user : 'Sara Wilson',
        updated : Date.now(),
        needsAttention : false
    }]
}

const issueReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case IssueActionTypes.ADD_ISSUE:
            state.issueList.push(action.payload)
            return {
                ...state
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