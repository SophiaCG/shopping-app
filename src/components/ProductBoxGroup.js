import React from "react";
import ProductBox from "./ProductBox";

const ProductBoxGroup = ({ data }) => {
  const renderBoxes = () => {
    const columns = [];

    const maxProductsToRender = Math.min(12, data.length);
    for (let i = 0; i < maxProductsToRender; i++) {
      columns.push(<ProductBox product={data[i]}></ProductBox>);
    }
    return columns;
  };

  return <div id="product-box-group">{renderBoxes()}</div>;
};

export default ProductBoxGroup;
