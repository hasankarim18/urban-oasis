import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Shop from "./Shop/Shop";
import { getShoppingCart } from "./utilities/fakedb";
import baseUrl from "./utilities/baseUrl";

const EmaJhonMain = () => {
  const [products, setProducts] = useState([]);
  const [isProductsLoading, setIsProductsLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseUrl}/products`)
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
      <Shop products={products} isProductsLoading={isProductsLoading} />
    </>
  );
};

export default EmaJhonMain;
