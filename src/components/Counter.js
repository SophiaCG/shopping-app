import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <button className="counter-button" onClick={decrement}>
        <i className="fa-solid fa-minus"></i>
      </button>
      <h3 className="counter">{count}</h3>
      <button className="counter-button" onClick={increment}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

export default Counter;
