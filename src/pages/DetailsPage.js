import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function DetailsPage() {
  const location = useLocation();
  const receivedData = location.state; // Access the passed data
  console.log(`RECEIVED DATA: ${receivedData}`);
  return (
    <div>
      <h1>Details Page</h1>

      <p>Data received: {receivedData.title}</p>
    </div>
  );
}

export default DetailsPage;
