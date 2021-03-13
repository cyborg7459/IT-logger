import {IssueActionTypes} from './issue.types';

export const addIsssue = issue => ({
    type : IssueActionTypes.ADD_ISSUE,
    payload : issue
});

export const deleteIssue = id => ({
    type : IssueActionTypes.DELETE_ISSUE,
    payload : id
});

export const deleteAllIssues = () => ({
    type : IssueActionTypes.DELETE_ALL_ISSUES
});