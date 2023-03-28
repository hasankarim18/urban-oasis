import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import { addToDb, getShoppingCart } from '../utilities/fakedb';
 import { useRenderPageNumbers, useRenderProducts } from '../utilities/functions';
import Spinner from '../utilities/Spinner';
import './Shop.css';

const Shop = ({products, isProductsLoading}) => {


    const [currentPage, setCurrentPage] = useState(1)
    const [cart, setCart] = useState([])

    useEffect(() => {
      const storedCart = getShoppingCart();
      const savedCart = [];
      // step-One: get id of the added product 
      for (const id in storedCart) {
        // step two: get product from products state by using id 
        const addedProduct = products.find(product => product.id === id) 
        if(addedProduct){
          // step add quantiry 
          const quantity = storedCart[id];
          addedProduct.quantity = quantity;
          // step 4: add the addedproduct to the saved cart
          savedCart.push(addedProduct)
        }
       // console.log({addedProduct});
      }
      // step 5: set the cart
      setCart(savedCart);

    }, [products]);
    



    const handleAddToCart = (product) => {
      // const newCart = [...cart,product]
      // setCart(newCart)
      // functional update is good
      let newCart = [];
      // if product doesn't exist in the cart, the set quantity = 1
      // if exist update quantity by 1 

      const exists = cart.find((pd)=> pd.id === product.id )

      if(!exists){
        // for first time add
        product.quantity = 1
        newCart = [...cart, product]
      }else {
        // product ase
        exists.quantity = exists.quantity + 1;
        const remaining = cart.filter((pd)=> pd.id !== product.id )
        newCart = [...remaining, exists]
      }

      setCart(newCart);

      addToDb(product.id);
    };

    
    const productsPerPage = 9;

     const indexOfLastProduct = currentPage * productsPerPage;
     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
     const currentProducts = products.slice(
       indexOfFirstProduct,
       indexOfLastProduct
     );

    const totalPages = Math.ceil(products.length / productsPerPage);

  

  //  console.log(cart);

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