import React, { useState } from "react";

function DropdownMenu({
  categories,
  fetchData,
  menuStatus,
  setMenuStatus,
  sliderStatus,
  setSliderStatus,
}) {
  const handleSearch = (selectedCategory) => {
    // event.preventDefault();

    fetchData("", selectedCategory);
    toggleDropdown();

    // Perform your search or other actions here
  };

  const toggleDropdown = () => {
    if (sliderStatus == true) {
      setSliderStatus(!sliderStatus);
    }
    setMenuStatus(!menuStatus);
  };

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const renderBoxes = () => {
    const boxes = [];

    for (let i = 0; i < categories.length; i++) {
      boxes.push(
        <button
          className="category-button"
          onClick={() => {
            handleSearch(categories[i]);
          }}
        >
          <h4 className="categories-label">
            {capitalizeFirstLetter(categories[i])}
          </h4>
        </button>
      );
    }
    return boxes;
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        <h4 className="categories-label">Categories</h4>
        <i
          className={`fa-solid ${menuStatus ? "fa-angle-up" : "fa-angle-down"}`}
        ></i>
      </button>
      {menuStatus && <div className="dropdown-menu">{renderBoxes()}</div>}
    </div>
  );
}

export default DropdownMenu;
