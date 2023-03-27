import React from 'react';
import './Product.css'

const Product = ({product, i}) => {
   // console.log(product);
    return (
        <div className="product p-2">
           <img className="img-fluid" src={product.img} alt="" />
        </div>
    );
};

export default Product;