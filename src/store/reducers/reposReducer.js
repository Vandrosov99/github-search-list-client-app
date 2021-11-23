const SET_REPOS = "SET_REPOS";

const initState = {
  items: [],
  isFetching: null,
};

const reposReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_REPOS: {
      return {
        ...state,
        items: payload.items,
      };
    }
    default:
      return state;
  }
};

export const setRepos = reposData => {
  return {
    type: SET_REPOS,
    payload: reposData,
  };
};

export default reposReducer;
