import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Shop from "./Shop/Shop";
import { getShoppingCart } from "./utilities/fakedb";

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

  useEffect(() => {
    const storredCart = getShoppingCart();
    console.log(storredCart);
  
  }, [])
  

  return (
    <>
      <Header />
      <Shop products={products} isProductsLoading={isProductsLoading} />
    </>
  );
};

export default EmaJhonMain;
