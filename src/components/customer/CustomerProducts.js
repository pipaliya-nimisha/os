import React, { useState } from "react";
import Category from "./Category.js";
import Product from "./Product.js";

function CustomerProducts() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
      <Category setSelectedCategory={setSelectedCategory} />
      <Product category={selectedCategory} />
    </>
  );
}

export default CustomerProducts;