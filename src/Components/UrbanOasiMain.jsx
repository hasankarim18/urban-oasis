import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Shop from "./Shop/Shop";
import { getShoppingCart } from "./utilities/fakedb";
import baseUrl from "./utilities/baseUrl";
import { useLoaderData } from "react-router-dom";


const UrbanOasiMain = () => {
 
    const {totalProducts} = useLoaderData();


    return (
      <>
        <Shop
          totalProducts={totalProducts}
       
        />
      </>
    );
};

export default UrbanOasiMain;