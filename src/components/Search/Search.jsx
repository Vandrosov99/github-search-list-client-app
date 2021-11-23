import React from "react";
import "../Search/Search.less";

const Search = () => {
  return (
    <div className='search'>
      <input type='text' placeholder='input repo name' className='search-input' />
      <button className='search-btn'>Search</button>
    </div>
  );
};

export default Search;
