import { createSelector } from 'reselect';

const SelectIssueList = state => state.issues;

export const getIssues = createSelector(
    [SelectIssueList],
    issues => issues
)

export const getIssuesList = createSelector(
    [getIssues],
    issues => issues.issueList
)