import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepositories } from "../../store/actions/reposActions";
import { makeSelectReposItems } from "../../store/selectors/reposSelectors";
import Repolist from "../RepoList/RepoList";

const MainPage = () => {
  const dispatch = useDispatch();
  const reposData = useSelector(makeSelectReposItems());

  useEffect(() => {
    dispatch(getRepositories());
  }, []);

  return (
    <div>
      <Repolist reposData={reposData} />
    </div>
  );
};

export default MainPage;
