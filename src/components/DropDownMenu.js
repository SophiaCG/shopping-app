import React, { useState } from "react";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        <h4 className="categories-label">Categories</h4>
        <i
          className={`fa-solid ${isOpen ? "fa-angle-up" : "fa-angle-down"}`}
        ></i>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <button className="category-button" onClick={console.log("Clothes")}>
            <h4 className="categories-label">Clothes</h4>
          </button>
          <button
            className="category-button"
            onClick={console.log("Electronics")}
          >
            <h4 className="categories-label">Electronics</h4>
          </button>
          <button
            className="category-button"
            onClick={console.log("Furniture")}
          >
            <h4 className="categories-label">Furniture</h4>
          </button>
          <button className="category-button" onClick={console.log("Shoes")}>
            <h4 className="categories-label">Shoes</h4>
          </button>
          <button className="category-button" onClick={console.log("Others")}>
            <h4 className="categories-label">Others</h4>
          </button>
          <button
            className="category-button"
            onClick={console.log("Clear All")}
          >
            <h4 className="categories-label">Clear All</h4>
          </button>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
