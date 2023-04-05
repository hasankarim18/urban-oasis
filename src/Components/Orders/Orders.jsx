import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData} from "react-router-dom";
import ReviewItem from '../Reviewitem/ReviewItem';
import './Orders.css'
import { removeFromDb } from '../utilities/fakedb';


const Orders = () => {
     const savedCart = useLoaderData() || []
    const [cart, setCart] = useState(savedCart)

    const handleRemoveFromCart = (id)=> {
     const remaining = cart.filter(pd => pd.id !== id)
     setCart(remaining)
     removeFromDb(id)
    }

    
    return (
      <div className="shop_containere">
        <div className="review_container">
          {cart.map((product) => (
            <ReviewItem
              handleRemoveFromCart={handleRemoveFromCart}
              key={product.id}
              product={product}
            />
          ))}
        </div>
        <Cart cart={cart} />
      </div>
    );
};

export default Orders;