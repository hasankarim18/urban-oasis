import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
 import { useRenderPageNumbers, useRenderProducts } from '../utilities/functions';
import Spinner from '../utilities/Spinner';
import './Shop.css';

const Shop = ({products, isProductsLoading}) => {


    const [currentPage, setCurrentPage] = useState(1)
    const [cart, setCart] = useState([])

    
    const productsPerPage = 9;

     const indexOfLastProduct = currentPage * productsPerPage;
     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
     const currentProducts = products.slice(
       indexOfFirstProduct,
       indexOfLastProduct
     );

    const totalPages = Math.ceil(products.length / productsPerPage);

    const handleAddToCart = (product)=> {
      // const newCart = [...cart,product]
      // setCart(newCart)   
      // functional update is good     
      setCart((prev)=> {
       return [...prev, product]
      })
    }

    console.log(cart);

   const renderProducts = ()=> {
     return currentProducts.map((product) => {
       // console.log(product);
       return (
         <Product
           handleAddToCart={handleAddToCart}
           product={product}
           key={product.id}
         />
       );
       //  return <h1>Product</h1>
     });
   }




   const renderPageNumbers = useRenderPageNumbers(
     totalPages,
     currentPage,
     setCurrentPage
   );

    
    return (
      <div className="shop_containere">
        <div className="products_container pt-4">
          <div className="product_grid">
            {isProductsLoading && <Spinner />}
            {renderProducts()}           
          </div>
          <ul className="d-flex pageNuberContainer mt-5" type="none">
            {renderPageNumbers}           
          </ul>
        </div>
        <Cart cart={cart} />
        {/* <OrderSummary cart={cart} /> */}
      </div>
    );
};

export default Shop;