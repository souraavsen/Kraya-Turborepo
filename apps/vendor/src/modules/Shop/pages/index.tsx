import React from "react";
import SearchProduct from "../components/SearchProduct";
import Categories from "../components/Categories";
import NewArrival from "../components/NewArrival";
import FeaturedBrands from "../components/FeaturedBrands";
import TopVendors from "../components/TopVendors";

const Shop: React.FC = () => {
  return (
    <div>
      <SearchProduct />
      <Categories />
      <NewArrival />
      <FeaturedBrands />
      <TopVendors/>
    </div>
  );
};

export default Shop;
