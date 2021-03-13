import { createSelector } from 'reselect';

const SelectIssueList = state => state.issues;

export const getIssuesList = createSelector(
    [SelectIssueList],
    issues => issues
)