import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import StarRow from "./StarRow";

const ProductBox = ({ product }) => {
  return (
    <div className="product-box">
      <div className="product-box-info">
        <Link
          to="/details"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img
            src={product.images[0]}
            alt="Image"
            className="product-box-image"
          />
        </Link>

        <div className="product-box-header">
          <Link
            to="/details"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h3>{product.title}</h3>
          </Link>
          <h3 className="product-price">${product.price}</h3>
        </div>
        <p className="product-desc">{product.description}</p>

        <div className="ratings-box">
          <StarRow></StarRow>
          <p>({Math.floor(Math.random() * 1000)})</p>
        </div>
      </div>

      <button
        className="product-box-button"
        onClick={console.log("Add to cart")}
      >
        <h3>Add to Cart</h3>
      </button>
    </div>
  );
};

export default ProductBox;
