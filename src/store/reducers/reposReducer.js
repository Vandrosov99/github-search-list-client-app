const SET_REPOS = "SET_REPOS";
const SET_IS_FETCHING = "SET_IS_FETCHING";

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
    case SET_IS_FETCHING: {
      return {
        ...state,
        isFetching: payload,
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

export const setIsFetching = isFetching => {
  return {
    type: SET_IS_FETCHING,
    payload: isFetching,
  };
};

export default reposReducer;
