import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData} from "react-router-dom";
import ReviewItem from '../Reviewitem/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../utilities/fakedb';
import useTitle from '../Hooks/useTitle';


const Orders = () => {
     const savedCart = useLoaderData() || []
    const [cart, setCart] = useState(savedCart)
    useTitle("Orders")

    const handleRemoveFromCart = (id)=> {
     const remaining = cart.filter(pd => pd._id !== id)
     console.log(id);
     setCart(remaining)
     removeFromDb(id)
    }
    
    const handleClearCart = () => {
      deleteShoppingCart()
      setCart([])
    };
    
    return (
      <div className="shop_containere">
        <div className="review_container">
          {cart.map((product) => (
            <ReviewItem
              handleRemoveFromCart={handleRemoveFromCart}
              key={product._id}
              product={product}
            />
          ))}
        </div>
        <Cart handleClearCart={handleClearCart} cart={cart}>
          <Link className="text-white text-decoration-none " to="/checkout"> Procede To checkout</Link>
        </Cart>
      </div>
    );
};

export default Orders;