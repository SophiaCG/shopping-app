import React, { useState } from "react";

function RadioButtons() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <form className="radio-buttons-container">
      <label>
        <input
          type="radio"
          name="option"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleOptionChange}
        />
        <span className="circle"></span> Cash on Delivery
      </label>

      <label>
        <input
          type="radio"
          name="option"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleOptionChange}
        />
        <span className="circle"></span> Shopcart Card
      </label>

      <label>
        <input
          type="radio"
          name="option"
          value="option3"
          checked={selectedOption === "option3"}
          onChange={handleOptionChange}
        />
        <span className="circle"></span> Paypal
      </label>

      <label>
        <input
          type="radio"
          name="option"
          value="option4"
          checked={selectedOption === "option4"}
          onChange={handleOptionChange}
        />
        <span className="circle"></span> Credit or Debit card
      </label>
    </form>
  );
}

export default RadioButtons;
