import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import StarRow from "./StarRow";

const ProductBox = ({ product }) => {
  return (
    <div className="product-box">
      <div className="product-box-info">
        <Link
          to={{
            pathname: "/details",
            state: product, // your data array of objects
          }}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <img
            src={product.images[0]}
            alt="Image"
            className="product-box-image"
          />
        </Link>

        <div className="product-box-header">
          <Link
            to={{
              pathname: "/details",
              state: product, // your data array of objects
            }}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <h3>{product.title}</h3>
          </Link>
          <h3 className="product-price">${product.price}.00</h3>
        </div>
        <p className="product-desc">{product.description}</p>

        <StarRow rating={product.rating}></StarRow>
      </div>

      <button className="product-box-button" onClick={console.log("")}>
        <h3>Add to Cart</h3>
      </button>
    </div>
  );
};

export default ProductBox;
