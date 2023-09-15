import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import StarRow from "./StarRow";
import axios from "axios";
import HeartButton from "./HeartButton";

const ProductBox = ({ product }) => {
  const [cartItems, setCartItems] = useState([]); // State for cart items

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      quantity: 1,
      price: product.price,
    };

    axios
      .post("http://localhost:8000/cart", cartItem)
      .then((response) => {
        // Update the cart items state with the newly added item
        setCartItems([...cartItems, response.data]);
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
      });
  };

  return (
    <div className="product-box">
      <div className="product-box-info">
        <div className="product-image-heart-container">
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
          <HeartButton></HeartButton>
        </div>

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

      <button className="product-box-button" onClick={handleAddToCart}>
        <h3>Add to Cart</h3>
      </button>
    </div>
  );
};

export default ProductBox;
