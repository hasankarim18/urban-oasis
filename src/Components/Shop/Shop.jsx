import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../utilities/fakedb';
import Spinner from '../utilities/Spinner';
import './Shop.css';
import { Link, useLocation } from 'react-router-dom';

const Shop = ({products, isProductsLoading}) => {  
  
    const [cart, setCart] = useState([])

    const location = useLocation()
    console.log(location);

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
      let newCart = [];   
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

      addToDb(product.id); // video 4
    };

    
   

  let showProducts = null

  if(products.length > 0){
    
    showProducts =  products.map((product) => {
        return (
          <Product
            handleAddToCart={handleAddToCart}
            product={product}
            key={product.id}
          />
        );
      });
    
  }

  const handleClearCart = () => {
    deleteShoppingCart()
    setCart([]);
  };
 
    
    return (
      <div className="shop_containere">
        <div className="products_container pt-4">
          <div className="product_grid">
            {isProductsLoading && <Spinner />}
            {showProducts}
          </div>
        </div>
        <Cart handleClearCart={handleClearCart} cart={cart}>
          <Link to="/orders">Review order</Link>
        </Cart>
        {/* <OrderSummary cart={cart} /> */}
      </div>
    );
};

export default Shop;