import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard/ProductCard";
import "./BrandProducts.css";

const BrandProducts = () => {
  const productCards = useLoaderData();

  return (
    <div className="cards-style ms-3">
      {productCards.map((productCard) => (
        <ProductCard
          key={productCard._id}
          productCard={productCard}
        ></ProductCard>
      ))}
    </div>
  );
};

export default BrandProducts;
