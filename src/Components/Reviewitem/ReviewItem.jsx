import React from 'react';
import './ReviewItem.css'
import { TrashIcon } from "@heroicons/react/24/solid";



const ReviewItem = ({ product, handleRemoveFromCart }) => {
  // console.log(product);
  const { img, name, quantity, price, shipping,_id } = product;
  return (
    <div className="review_item flex justify-between items-center  ">
      <div className="flex  gap-3">
        <img src={img} style={{ width: "81px", height: "81px" }} alt="" />
        <div className="flex flex-column justify-evenly">
          <h5>{name}</h5>
          <p>
            {" "}
            Price <span className=" text-myorange">{price}</span>
          </p>
          <p>
            Shipping Charge: <span className="text-myorange">{shipping}</span>{" "}
          </p>
        </div>
      </div>
      <div>
        <div
          style={{ width: "50px", height: "50px" }}
          className=" rounded-full flex justify-center items-center bg-red-300 "
        >
          <TrashIcon onClick={()=> {handleRemoveFromCart(_id)}} className="h-6 w-6 text-red-500 cursor-pointer hover:text-white  transition" />
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;