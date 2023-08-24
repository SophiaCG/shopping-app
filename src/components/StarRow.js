import React from "react";

function StarRow() {
  const minIcons = 3;
  const maxIcons = 5;
  const numberOfIcons =
    Math.floor(Math.random() * (maxIcons - minIcons + 1)) + minIcons;
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
