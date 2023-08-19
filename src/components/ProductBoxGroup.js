import React from "react";
import ProductBox from "./ProductBox";

const ProductBoxGroup = ({ data }) => {
  const renderBoxes = () => {
    const columns = [];
    for (let i = 0; i < 12; i++) {
      columns.push(<ProductBox product={data[i]}></ProductBox>);
    }
    return columns;
  };

  return <div id="product-box-group">{renderBoxes()}</div>;
};

export default ProductBoxGroup;
