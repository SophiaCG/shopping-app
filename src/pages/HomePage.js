import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import ProductBoxGroup from "../components/ProductBoxGroup";
import DropdownMenu from "../components/DropDownMenu";
import PriceSliders from "../components/PriceSliders";

function HomePage() {
  const [data, setData] = useState(null);
  const [queryLoading, setQueryLoading] = useState(true);
  const [categories, setCategories] = useState(null);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [menuStatus, setMenuStatus] = useState(false);
  const [sliderStatus, setSliderStatus] = useState(false);

  const fetchData = (query = "", category = "") => {
    let searchQuery = "";
    setQueryLoading(true);

    if (query != "") {
      searchQuery = `/search?q=${query}`;
    }

    if (category != "") {
      searchQuery = `/category/${category}`;
    }

    fetch(`https://dummyjson.com/products${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.products);
        setQueryLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setQueryLoading(false);
      });
  };

  const fetchCategories = () => {
    setCategoriesLoading(true);

    fetch(`https://dummyjson.com/products/categories`)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setCategoriesLoading(false);
        console.log(`CATEGORY: ${data[0]}`);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setCategoriesLoading(false);
      });
  };

  useEffect(() => {
    // Make the initial API call with the default query "us"
    fetchData("");
    fetchCategories();
  }, []);

  if (queryLoading) {
    return <div>Loading...</div>;
  }

  if (!data || !data[0]) {
    return <div>No products found.</div>;
  }

  return (
    <div>
      <NavBar fetchData={fetchData}></NavBar>
      <div className="header-container">
        <img
          src="/images/homepage-header.png"
          alt="Header Image"
          className="homepage-header"
        ></img>
      </div>
      <div className="filters-box">
        <DropdownMenu
          categories={categories}
          fetchData={fetchData}
          menuStatus={menuStatus}
          setMenuStatus={setMenuStatus}
          sliderStatus={sliderStatus}
          setSliderStatus={setSliderStatus}
        ></DropdownMenu>
        <PriceSliders
          menuStatus={menuStatus}
          setMenuStatus={setMenuStatus}
          sliderStatus={sliderStatus}
          setSliderStatus={setSliderStatus}
        ></PriceSliders>
      </div>
      <ProductBoxGroup data={data}></ProductBoxGroup>
    </div>
  );
}

export default HomePage;
