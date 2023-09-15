import NavBar from "../components/NavBar";
import CouponSearchBar from "../components/CouponSearchBar";
import RadioButtons from "../components/RadioButtons";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CartItemInfo from "../components/CartItemInfo";

function ShoppingCartPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:8000/cart";

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <div className="cart-page">
        <div className="cart-left-column">
          <div className="cart-item-container">
            <h1>Review Item and Shipping</h1>
            {data.map((item) => (
              <CartItemInfo key={item._id} item={item} />
            ))}
          </div>
          <div className="cart-item-container">
            <div className="delivery-header-container">
              <h1>Delivery Information</h1>
              <div className="delivery-edit-button-container">
                <button className="delivery-edit-button">
                  Edit Information
                </button>
              </div>
            </div>
            <div className="delivery-text-container">
              <div className="delivery-labels-container">
                <h3>Name:</h3>
                <h3>Address:</h3>
                <h3>City:</h3>
                <h3>Zip Code:</h3>
                <h3>Mobile:</h3>
                <h3>Email:</h3>
              </div>
              <div className="delivery-info-container">
                <h3>Jane Doe</h3>
                <h3>123 Avenue St.</h3>
                <h3>City, State</h3>
                <h3>12345</h3>
                <h3>123-456-7890</h3>
                <h3>myemail@gmail.com</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-right-column">
          <h1>Order Summary</h1>
          <hr></hr>
          <CouponSearchBar></CouponSearchBar>
          <hr></hr>
          <h2>Payment Details</h2>
          <hr></hr>
          <RadioButtons></RadioButtons>
          <div className="credit-cards-container">
            <img src={"/images/credit-cards.png"} alt="Image" className="" />
          </div>
          <h3>Email*</h3>
          <div className="textbox-container">
            <label className="label" htmlFor="textbox"></label>
            <input
              className="input"
              type="text"
              id="textbox"
              name="textbox"
              placeholder="Type here..."
            />
          </div>

          <h3>Card Holder Name*</h3>
          <div className="textbox-container">
            <label className="label" htmlFor="textbox"></label>
            <input
              className="input"
              type="text"
              id="textbox"
              name="textbox"
              placeholder="Type here..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
