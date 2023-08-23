import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import ProductBoxGroup from "../components/ProductBoxGroup";
import DropdownMenu from "../components/DropDownMenu";
import PriceSliders from "../components/PriceSliders";
import { Link } from "react-router-dom";

function HomePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Modify the fetchData function to accept a query parameter
  const fetchData = (query) => {
    setLoading(true);

    fetch(`https://api.escuelajs.co/api/v1/products`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data[0].title);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    // Make the initial API call with the default query "us"
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No products found.</div>;
  }

  return (
    <div>
      <NavBar></NavBar>
      <div className="header-container">
        <img
          src="/images/homepage-header.png"
          alt="Header Image"
          className="homepage-header"
        ></img>
      </div>
      <div className="filters-box">
        <DropdownMenu></DropdownMenu>
        <PriceSliders></PriceSliders>
      </div>
      <ProductBoxGroup data={data}></ProductBoxGroup>
    </div>
  );
}

export default HomePage;
