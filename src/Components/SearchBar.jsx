import React, { useState } from "react";

const SearchBar = ({ searchText, setSearchText }) => {

  return (
    <div>
      <label>Search Task</label>
      <input
        type="search"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="border border-gray-300 p-2 rounded-md transition-all duration-300 hover:border-blue-500 hover:p-3 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
