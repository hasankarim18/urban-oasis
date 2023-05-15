import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Shop from "./Shop/Shop";
import { getShoppingCart } from "./utilities/fakedb";
import baseUrl from "./utilities/baseUrl";
import { useLoaderData } from "react-router-dom";


const UrbanOasiMain = () => {
    const [products, setProducts] = useState([]);
    const [isProductsLoading, setIsProductsLoading] = useState(true);
    const {totalProducts} = useLoaderData();

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
        <Shop
          totalProducts={totalProducts}
          products={products}
          isProductsLoading={isProductsLoading}
        />
      </>
    );
};

export default UrbanOasiMain;