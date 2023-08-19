import React, { useState } from "react";
import DropdownMenu from "./DropDownMenu";

function FiltersBox() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="filters-box">
      <DropdownMenu></DropdownMenu>
    </div>
  );
}

export default FiltersBox;
