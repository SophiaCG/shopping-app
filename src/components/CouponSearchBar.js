import React, { useState } from "react";

function CouponSearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    console.log(event);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
    }
  };

  return (
    <div className="search-bar coupon-search-bar">
      <input
        type="text"
        placeholder="Enter Coupon Code"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown} // Add the onKeyDown event handler
      />
      <div className="coupon-search-button-container">
        <button className="coupon-search-button">Apply coupon</button>
      </div>
    </div>
  );
}

export default CouponSearchBar;
