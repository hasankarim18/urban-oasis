import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
  //  console.log(cart);
  /**price by reduct */
// const totalPrice = cart.reduce((current, element)=> current + element.price, 0)
 /**Price by for of loop */
let totalPrice = 0;
let shipping = 0;
let quantity = 0;
 for (const product of cart) {
  
  // if(product.quantity === 0){
  //   product.quantity =1 
  // }
  // short cat
 //  product.quantity = product.quantity || 1
    totalPrice = totalPrice + product.price * product.quantity
    shipping = shipping + product.shipping
    quantity = quantity + product.quantity 
  }

  const tax = totalPrice*7/100
   const grandTotal = totalPrice + shipping + tax
   
    return (
      <div className="cart_container p-3">
        <div className="cart_info">
          <h4>Order Summary</h4>
          <p className="fs-5 fw-bold">
            Selected Item: <span className="text-success"> {quantity} </span>{" "}
          </p>
          <p>
            Total Price: <span className="fw-bold text-success">{totalPrice.toFixed(2)}</span>{" "}
          </p>
          <p>
            Total Shipping Change:{" "}
            <span className="fw-bold text-success">{shipping.toFixed(2)}</span>{" "}
          </p>
          <p>
            Tax: {tax.toFixed(2)} <span className="fw-bold text-success"></span>{" "}
          </p>
          <p>
            Grand Total: {grandTotal.toFixed(2)} <span className="fw-bold text-success"></span>{" "}
          </p>
          <div>
            <button className="btn btn-danger w-100 text-center text-white mb-3">
              Clear Cart <i className="ms-3 fa-regular fa-trash-can"></i>
            </button>{" "}
            <br />
            <button className="btn btn-success w-100 text-center text-white">
              Review Order
              <i className="fa-solid fa-arrow-right ms-3"></i>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Cart;