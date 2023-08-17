import React, { useState } from "react";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="nav-bar-button" onClick={toggleDropdown}>
        <h3>Categories</h3>
        <i
          className={`fa-solid ${isOpen ? "fa-angle-up" : "fa-angle-down"}`}
        ></i>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
