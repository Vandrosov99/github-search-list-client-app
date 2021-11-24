import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepositories } from "../../store/actions/reposActions";
import { makeSelectReposItems, makeSelectIsFetching } from "../../store/selectors/reposSelectors";
import Repolist from "../RepoList/RepoList";
import Search from "../Search/Search";
import Loader from "../Loader/Loader";

const MainPage = () => {
  const dispatch = useDispatch();
  const reposData = useSelector(makeSelectReposItems());
  const isFetching = useSelector(makeSelectIsFetching());

  useEffect(() => {
    dispatch(getRepositories());
  }, []);

  return (
    <div>
      {isFetching ? (
        <Loader />
      ) : (
        <div>
          <Search dispatch={dispatch} getRepositories={getRepositories} />
          <Repolist reposData={reposData} />
        </div>
      )}
    </div>
  );
};

export default MainPage;
