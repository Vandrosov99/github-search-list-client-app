import React from "react";
import "../RepoItem/RepoItem.less";

const RepoItem = props => {
  const { name, stargazers_count, updated_at, html_url } = props.data;

  const parsedUpdatedTime = updated_at.substring(0, 10);
  return (
    <div className='repo'>
      <div className='repo-header'>
        <div className='repo-header-name'>{name}</div>
        <div className='repo-header-stars'>Count of stars: {stargazers_count}</div>
      </div>
      <div className='repo-last-comit'>Last update at: {parsedUpdatedTime}</div>
      <a href={html_url} className='repo-link'>
        Go to GitHub
      </a>
    </div>
  );
};

export default RepoItem;
