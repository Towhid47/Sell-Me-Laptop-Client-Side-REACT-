import React, { useEffect, useState } from "react";
import BrandCard from "../BrandCard/BrandCard";
import "./PopularBrands.css";

const PopularBrands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("https://sell-me-laptop-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div className="m-5">
      <h1 className="m-5 text-start">Popular Brands</h1>

      <div className="container cards-style">
        {brands.map((brand) => (
          <BrandCard key={brand._id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default PopularBrands;
