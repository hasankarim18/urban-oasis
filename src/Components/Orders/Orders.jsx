import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData} from "react-router-dom";


const Orders = () => {
     const cart = useLoaderData() || []
     console.log(cart);
    
    return (
      <div className="shop_containere">
        <div className="products_container">
          <h2>Orders page {cart.length}</h2>
        </div>
        <Cart cart={cart} />
      </div>
    );
};

export default Orders;