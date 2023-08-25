import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import StarRow from "../components/StarRow";
import Counter from "../components/Counter";
import DeliveryNotes from "../components/DeliveryNotes";
import ColorsCirclesGroup from "../components/ColorsCirclesGroup";
import ColorsBoxesGroup from "../components/ColorsBoxesGroup";

function DetailsPage() {
  const location = useLocation();
  const product = location.state; // Access the passed data
  const [activeState, setActiveStates] = useState(0);

  const toggleActive = (index) => {
    setActiveStates(index);
  };

  return (
    <div>
      <NavBar></NavBar>
      <p className="product-listing">
        {product.category} / {product.title}
      </p>
      <div className="row">
        <div className="column">
          <img
            src={product.images[activeState]}
            alt="Image"
            className="product-box-image details-image"
          />
          <ColorsBoxesGroup
            data={product.images}
            activeState={activeState}
            toggleActive={toggleActive}
          ></ColorsBoxesGroup>
        </div>
        <div className="column">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <StarRow rating={product.rating}></StarRow>
          <hr></hr>
          <h2>
            ${product.price}.00 or {(product.price / 6).toFixed(2)}/month
          </h2>
          <p>Suggested payments with 6 months special financing</p>
          <hr></hr>
          <h2>Choose a Color</h2>
          <ColorsCirclesGroup
            data={product.images}
            activeState={activeState}
            toggleActive={toggleActive}
          ></ColorsCirclesGroup>
          <hr></hr>
          <div className="counter-button-text">
            <Counter></Counter>
            <h5>
              Only <strong>{product.stock} items</strong> left! <br></br> Don't
              miss it
            </h5>
          </div>
          <div className="buy-buttons-container">
            <button
              className="product-box-button details-buy"
              onClick={console.log("")}
            >
              <h3>Buy Now</h3>
            </button>
            <button
              className="product-box-button details-buy"
              onClick={console.log("")}
            >
              <h3>Add to Cart</h3>
            </button>
          </div>
          <DeliveryNotes></DeliveryNotes>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
