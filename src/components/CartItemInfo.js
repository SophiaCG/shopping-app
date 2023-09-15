import React, { useState, useEffect } from "react";
import StarRow from "./StarRow";

function CartItemInfo({ item }) {
  const [data, setData] = useState(1);

  useEffect(() => {
    function fetchProductById() {
      fetch(`https://dummyjson.com/products/${item.id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        });
    }

    // Call the function with a specific product ID
    fetchProductById();
  }, []);

  return (
    <div className="cart-item-info-container">
      <img src={data.thumbnail} alt="Image" className="cart-image" />
      <div className="cart-item-text-container">
        <div>
          <h2>{data.title}</h2>
          <StarRow rating={data.rating}></StarRow>
          {/* <h3>Rating: {data.rating} / 5</h3> */}
        </div>
        <div>
          <h2>${data.price}.00</h2>
          <h3>Quantity: {item.quantity}</h3>
        </div>
      </div>
    </div>
  );
}

export default CartItemInfo;
