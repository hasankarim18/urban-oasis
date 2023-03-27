import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Shop from "./Shop/Shop";

const EmaJhonMain = () => {
  const [products, setProducts] = useState([]);
  const [isProductsLoading, setIsProductsLoading] = useState(true);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setIsProductsLoading(false);
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header />
      <Shop products={products} isProductsLoading={isProductsLoading} />
    </>
  );
};

export default EmaJhonMain;
