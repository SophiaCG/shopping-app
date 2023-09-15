import React from "react";

const ShoppingCartItemsGroup = ({ data }) => {
  const renderBoxes = () => {
    const columns = [];

    for (let i = 0; i < data.length; i++) {
      columns.push(
        <div className="cart-item-info-container">
          <img src={data[i].image} alt="Image" className="cart-image" />
          <div className="cart-item-text-container">
            <div>
              <h2>{data[i].name}</h2>
              <h3>Color: Pink</h3>
            </div>
            <div>
              <h2>$549.00</h2>
              <h3>Quantity: 01</h3>
            </div>
          </div>
        </div>
      );
    }
    return columns;
  };

  return <div id="product-box-group">{renderBoxes()}</div>;
};

export default ShoppingCartItemsGroup;
