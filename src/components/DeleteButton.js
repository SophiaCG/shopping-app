import React from "react";
import axios from "axios";

function DeleteButton({ itemId, onDelete }) {
  const handleDelete = () => {
    // Send a DELETE request to the API to delete the item
    axios
      .delete(`http://localhost:8000/cart/${itemId}`)
      .then(() => {
        // Call the onDelete callback function to update the UI
        onDelete(itemId);
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  return (
    <button
      title="Delete"
      className="delete-button"
      onClick={() => {
        handleDelete();
      }}
    >
      <i className="fa-solid fa-xmark"></i>
    </button>
  );
}

export default DeleteButton;
