import { createSelector } from "reselect";

const selectRepositories = state => state.repositories;
const makeSelectReposItems = () => createSelector(selectRepositories, repositories => repositories.items);

export { makeSelectReposItems };
