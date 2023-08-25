import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Product"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown} // Add the onKeyDown event handler
      />
      <button id="search-button" onClick={handleSearch}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}

export default SearchBar;
