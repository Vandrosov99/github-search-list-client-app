import { createSelector } from "reselect";

const selectRepositories = state => state.repositories;
const makeSelectReposItems = () => createSelector(selectRepositories, repositories => repositories.items);
const makeSelectIsFetching = () => createSelector(selectRepositories, repositories => repositories.isFetching);

export { makeSelectReposItems, makeSelectIsFetching };
