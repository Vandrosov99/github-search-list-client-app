import axios from "axios";
import { setRepos } from "../reducers/reposReducer";

const getRepositories = querySelector => {
  return async dispatch => {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${querySelector}&sort=stars`);

    dispatch(setRepos(response.data));
  };
};

export { getRepositories };
