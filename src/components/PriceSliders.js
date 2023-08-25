import React, { useState } from "react";

function PriceSliders({
  menuStatus,
  setMenuStatus,
  sliderStatus,
  setSliderStatus,
}) {
  const toggleDropdown = () => {
    if (menuStatus == true) {
      setMenuStatus(!menuStatus);
    }
    setSliderStatus(!sliderStatus);
  };

  const [minSliderValue, setMinSliderValue] = useState(50);
  const [maxSliderValue, setMaxSliderValue] = useState(50);

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        <h4 className="categories-label">Price</h4>
        <i
          className={`fa-solid ${
            sliderStatus ? "fa-angle-up" : "fa-angle-down"
          }`}
        ></i>
      </button>
      {sliderStatus && (
        <div className="price-slider-container">
          <div className="price-slider">
            <input
              type="range"
              min="0"
              max="100"
              value={minSliderValue}
              onChange={(e) => setMinSliderValue(parseInt(e.target.value))}
            />
            <p>Min: {minSliderValue}</p>
          </div>
          <div className="price-slider">
            <input
              type="range"
              min="0"
              max="100"
              value={maxSliderValue}
              onChange={(e) => setMaxSliderValue(parseInt(e.target.value))}
            />
            <p>Max: {maxSliderValue}</p>
          </div>
          <div className="apply-button-container">
            <button className="apply-button" onClick={toggleDropdown}>
              <h3 className="apply-button-label">Apply</h3>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PriceSliders;
