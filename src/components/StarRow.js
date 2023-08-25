import React from "react";

function StarRow({ rating }) {
  const minIcons = 3;
  const maxIcons = 5;
  const numberOfIcons = customRound(rating);
  const totalIcons = 5;

  const starType = (index) => {
    if (index < numberOfIcons) {
      return "fa-solid";
    } else {
      return "fa-regular";
    }
  };

  const starId = (index) => {
    if (index < numberOfIcons) {
      return "solid-star";
    } else {
      return "regular-star";
    }
  };

  function customRound(number) {
    const decimalPart = number - Math.floor(number); // Get the decimal part
    if (decimalPart >= 0.5) {
      return Math.ceil(number); // Round up if decimal part is 0.5 or greater
    } else {
      return Math.floor(number); // Round down otherwise
    }
  }

  return (
    <div className="ratings-box">
      <div className="star-row">
        {[...Array(totalIcons)].map((_, index) => (
          <div key={index}>
            <i className={`${starType(index)} fa-star`} id={starId(index)}></i>
          </div>
        ))}
      </div>
      <p>({Math.floor(Math.random() * 1000)})</p>
    </div>
  );
}

export default StarRow;
