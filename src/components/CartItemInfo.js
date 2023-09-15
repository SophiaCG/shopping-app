import React, { useState, useEffect } from "react";
import StarRow from "./StarRow";
import DeleteButton from "./DeleteButton";

function CartItemInfo({ item, onDelete }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    function fetchProductById() {
      fetch(`https://dummyjson.com/products/${item.id}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        });
    }

    // Call the function with a specific product ID
    fetchProductById();
  }, [item.id]);

  return (
    <div className="cart-item-info-container">
      {data && (
        <>
          <img src={data.thumbnail} alt="Image" className="cart-image" />
          <div className="cart-item-text-container">
            <div>
              <h2>{data.title}</h2>
              <StarRow rating={data.rating}></StarRow>
            </div>
            <div>
              <h2>${item.price}.00</h2>
              <h3>Quantity: {item.quantity}</h3>
            </div>
          </div>
          <DeleteButton itemId={item._id} onDelete={onDelete} />
        </>
      )}
    </div>
  );
}

export default CartItemInfo;
