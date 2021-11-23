import React from "react";
import RepoItem from "../RepoItem/RepoItem";

const RepoList = ({ reposData }) => {
  return reposData.map((reposItem, index) => {
    return <RepoItem key={index} data={reposItem} />;
  });
};

export default RepoList;
