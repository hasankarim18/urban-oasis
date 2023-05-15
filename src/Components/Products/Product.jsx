import React from "react";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
  const { name, id, seller, price, img, quantity, ratings } = product;
  // console.log(product);
  return (
    <div className="product">
      <div className="card rounded-2 ">
        <div className="p-2">
          <img
            style={{ width: "286px", height: "286px" }}
            className="rounded-2"
            src={img}
            alt={name}
          />
        </div>
        <div className="product_infos text-start p-2">
          <h6>{name}</h6>
          <p className="fw-bold ">Price ${price}</p>
        </div>
        <div className="info_2 p-2 text-start">
          <p className="mb-0 pb-0">Manufacturer: {seller} </p>
          <p className="mb-0 pb-0">Ratings: {ratings} star</p>
        </div>
        <div className="add_to_cart ">
          <button
            onClick={() => {
              handleAddToCart(product);
            }}
            className="btn border hover:text-rose-400 cart-btn rounded-0 w-100"
          >
            Add To Cart <span className=""></span>{" "}
            <i className="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
