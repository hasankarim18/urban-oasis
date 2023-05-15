import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../utilities/fakedb';
import Spinner from '../utilities/Spinner';
import './Shop.css';
import { Link, useLocation } from 'react-router-dom';

const Shop = ({ products, isProductsLoading, totalProducts }) => {
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const location = useLocation();
 
  const totalPages = Math.ceil(totalProducts/itemsPerPage)
  
  // const pageNumbers = [];
  // for(let i =1; i<= totalPages; i++){
  //   pageNumbers.push(i)
  // } 
   
  const pageNumbers = [...Array(totalPages).keys()]

  const dropdownOptions = [10,20, 30]
  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(event.target.value);
    setCurrentPage(0)
  };


  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step-One: get id of the added product
    for (const id in storedCart) {
      // step two: get product from products state by using id
      const addedProduct = products.find((product) => product._id === id);
      if (addedProduct) {
        // step add quantiry
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step 4: add the addedproduct to the saved cart
        savedCart.push(addedProduct);
      }
      // console.log({addedProduct});
    }
    // step 5: set the cart
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    let newCart = [];
    const exists = cart.find((pd) => pd._id === product._id);

    if (!exists) {
      // for first time add
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      // product ase
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd._id !== product._id);
      newCart = [...remaining, exists];
    }

    setCart(newCart);

    addToDb(product._id); // video 4
  };

 
  const handleClearCart = () => {
    deleteShoppingCart();
    setCart([]);
  };

  return (
    <>
      <div className="shop_containere">
        <div className="products_container pt-4">
          <div>
            <h1>Total Product {totalProducts} </h1>
          </div>
          <div className="product_grid">
            {isProductsLoading && <Spinner />}

            {products.map((product) => {
              return (
                <Product
                  handleAddToCart={handleAddToCart}
                  product={product}
                  key={product._id}
                />
              );
            })}
          </div>
        </div>
        <Cart handleClearCart={handleClearCart} cart={cart}>
          <Link className="text-white text-decoration-none " to="/orders">
            Review order
          </Link>
        </Cart>
        {/* <OrderSummary cart={cart} /> */}
      </div>
      {/* pagination */}
      <div className="container mx-auto  py-8">
        <p>Current page {currentPage} </p>
        <div className="w-full flex justify-center ">
          <div className="pagination btn-group">
            {pageNumbers.map((number) => {
              return (
                <button
                  onClick={() => setCurrentPage(number)}
                  style={{ flex: "0 0 auto" }}
                  className={`btn hover:text-rose-400 font-bold btn-sm border w-16 
                  ${currentPage === number && "btn-primary"}`}
                  key={number}
                >
                  {number}
                </button>
              );
            })}
          </div>
          <div className="ml-8">
            <label htmlFor="items-per-page">Items per page:</label>
            <select
              id="items-per-page"
              onChange={handleItemsPerPageChange}
              value={itemsPerPage}
            >
              {dropdownOptions.map(value => <option  key={value} value={value} > {value} </option>)}
             
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;


/**
 * STEPS   
 * 1.  1. Determinne the total number of items
 * 2. TODO: Decide on the number of items per page 
 * 3. Calcuate the total number of pages
 * 
 */