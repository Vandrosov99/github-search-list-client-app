import React from "react";

const RepoItem = props => {
  const { name, stargazers_count, updated_at, html_url } = props.data;
  return (
    <div className='repo'>
      <div className='repo-header'>
        <div className='repo-header-name'>{name}</div>
        <div className='repo-header-stars'>{stargazers_count}</div>
      </div>
      <div className='repo-last-comit'>{updated_at}</div>
      <a href={html_url} className='repo-link'>
        Сылка на репозиторий
      </a>
    </div>
  );
};

export default RepoItem;
