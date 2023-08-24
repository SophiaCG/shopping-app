import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SearchBar from "./SearchBar";

const NavBar = ({ fetchData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (query) => {
    // event.preventDefault();

    console.log("Search query:", query);
    fetchData(query);
    setSearchTerm("");

    // Perform your search or other actions here
  };

  return (
    <div id="nav-bar">
      <div className="nav-bar-half">
        <Link
          to="/"
          style={{ textDecoration: "none", color: "inherit" }}
          id="nav-bar-home"
        >
          <img id="shop-logo" src="images/shop.png" />
          <h1>The Shop</h1>
        </Link>
        <button className="nav-bar-button">
          <h4>Deals</h4>
        </button>
        <button className="nav-bar-button">
          <h4>What's New</h4>
        </button>
        <button className="nav-bar-button">
          <h4>Delivery</h4>
        </button>
      </div>

      <div className="nav-bar-half">
        <SearchBar onSearch={handleSearch} />
        <Link
          to="/details"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div class="nav-bar-link">
            <i class="fa-regular fa-user" id="link-icon"></i> <h4>Account</h4>{" "}
          </div>
        </Link>
        <Link
          to="/shoppingcart"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div class="nav-bar-link">
            <i class="fa-solid fa-cart-shopping" id="link-icon"></i>
            <h4>Cart</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
