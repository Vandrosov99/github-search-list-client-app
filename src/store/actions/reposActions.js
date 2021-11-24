import axios from "axios";
import { setRepos, setIsFetching } from "../reducers/reposReducer";

const getRepositories = querySelector => {
  if (querySelector === "" || querySelector === undefined) {
    querySelector = "stars:%3E1";
  }

  return async dispatch => {
    dispatch(setIsFetching(true));
    const response = await axios.get(`https://api.github.com/search/repositories?q=${querySelector}&sort=stars`);
    dispatch(setRepos(response.data));
    dispatch(setIsFetching(false));
  };
};

export { getRepositories };
