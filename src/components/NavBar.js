import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SearchBar from "./SearchBar";
import DropdownMenu from "./DropDownMenu";

const NavBar = ({}) => {
  const handleSearch = (query) => {
    console.log("Search query:", query);
    // Perform your search or other actions here
  };

  return (
    <div id="nav-bar">
      <Link
        to="/"
        style={{ textDecoration: "none", color: "inherit" }}
        id="nav-bar-home"
      >
        <img id="shop-logo" src="images/shop.png" />
        <h1>The Shop</h1>
      </Link>
      <DropdownMenu></DropdownMenu>
      <button className="nav-bar-button" onClick={console.log("Deals")}>
        <h3>Deals</h3>
      </button>
      <button className="nav-bar-button" onClick={console.log("Whats New")}>
        <h3>What's New</h3>
      </button>
      <button className="nav-bar-button" onClick={console.log("Delivery")}>
        <h3>Delivery</h3>
      </button>

      <SearchBar onSearch={handleSearch} />
      <Link to="/details" style={{ textDecoration: "none", color: "inherit" }}>
        <div class="nav-bar-link">
          <i class="fa-regular fa-user" id="link-icon"></i> <h3>Account</h3>{" "}
        </div>
      </Link>
      <Link
        to="/shoppingcart"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div class="nav-bar-link">
          <i class="fa-solid fa-cart-shopping" id="link-icon"></i>
          <h3>Cart</h3>
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
