import React, { useState } from "react";

function HeartButton() {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="heart-container" onClick={toggleLike}>
      {isLiked ? (
        <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
      ) : (
        <i className="fa-regular fa-heart" style={{ color: "" }}></i>
      )}
    </div>
  );
}

export default HeartButton;
