import React from 'react';

const OrderSummary = ({cart}) => {
    return (
      <div className="cart_container p-3">
        <h4>Order Summary</h4>
        <p className="fs-5 fw-bold">
          Selected Item: <sapn className="text-success"> {cart.length} </sapn>{" "}
        </p>
      </div>
    );
};

export default OrderSummary;