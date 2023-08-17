import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query); // Pass the query to the parent component
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Product"
        value={query}
        onChange={handleInputChange}
      />
      <button id="search-button" onClick={handleSearch}>
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}

export default SearchBar;
