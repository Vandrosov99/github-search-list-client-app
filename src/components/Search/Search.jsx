import React, { useState } from "react";
import "../Search/Search.less";

const Search = props => {
  const { dispatch, getRepositories } = props;
  const [inputValue, setInputValue] = useState("");

  const onChange = e => {
    const inputValue = e.target.value;

    setInputValue(inputValue);
  };

  const onClick = () => {
    dispatch(getRepositories(inputValue));
  };

  return (
    <div className='search'>
      <input
        value={inputValue}
        onChange={e => onChange(e)}
        type='text'
        placeholder='input repo name'
        className='search-input'
      />
      <button onClick={onClick} className='search-btn'>
        Search
      </button>
    </div>
  );
};

export default Search;
