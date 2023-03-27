import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import Spinner from '../utilities/Spinner';
import './Shop.css';

const Shop = ({products, isProductsLoading}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 9;

     const indexOfLastProduct = currentPage * productsPerPage;
     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
     const currentProducts = products.slice(
       indexOfFirstProduct,
       indexOfLastProduct
     );

     const totalPages = Math.ceil(products.length / productsPerPage);

      const renderProducts = () => {
        return currentProducts.map((product,i) => {
           // console.log(product);
            return <Product product={product} key={product.id} i={i} />;
        });
      };

    //    const renderPageNumbers = () => {
    //      const pageNumbers = [];

    //      for (let i = 1; i <= totalPages; i++) {
    //        pageNumbers.push(
    //          <li className={`p-3 border ms-1 me-1 ${currentPage===i && "active"}`} key={i} onClick={() => setCurrentPage(i)}>
    //            {i}
    //          </li>
    //        );
    //      }

    //      return pageNumbers;
    //    };

     const renderPageNumbers = () => {
       const pageNumbers = [];

     if (totalPages <= 4) {
       for (let i = 1; i <= totalPages; i++) {
         pageNumbers.push(
           <li
             key={i}
             onClick={() => setCurrentPage(i)}
             className={`page-number ${currentPage === i ? "active" : ""}`}
           >
             {i}
           </li>
         );
       }
     } else if (currentPage <= 2) {
       for (let i = 1; i <= 4; i++) {
         pageNumbers.push(
           <li
             key={i}
             onClick={() => setCurrentPage(i)}
             className={`page-number ${currentPage === i ? "active" : ""}`}
           >
             {i}
           </li>
         );
       }
       pageNumbers.push(<li key="last-page">...</li>);
       pageNumbers.push(
         <li
           key={totalPages}
           onClick={() => setCurrentPage(totalPages)}
           className="page-number"
         >
           {totalPages}
         </li>
       );
     } else if (currentPage >= totalPages - 1) {
       pageNumbers.push(
         <li key={1} onClick={() => setCurrentPage(1)} className="page-number">
           1
         </li>
       );
       pageNumbers.push(<li key="first-page">...</li>);
       for (let i = totalPages - 3; i <= totalPages; i++) {
         pageNumbers.push(
           <li
             key={i}
             onClick={() => setCurrentPage(i)}
             className={`page-number ${currentPage === i ? "active" : ""}`}
           >
             {i}
           </li>
         );
       }
     } else {
       pageNumbers.push(
         <li key={1} onClick={() => setCurrentPage(1)} className="page-number">
           1
         </li>
       );
       pageNumbers.push(<li key="first-ellipsis">...</li>);
       for (let i = currentPage - 1; i <= currentPage + 1; i++) {
         pageNumbers.push(
           <li
             key={i}
             onClick={() => setCurrentPage(i)}
             className={`page-number ${currentPage === i ? "active" : ""}`}
           >
             {i}
           </li>
         );
       }
       pageNumbers.push(<li key="last-ellipsis">...</li>);
       pageNumbers.push(
         <li
           key={totalPages}
           onClick={() => setCurrentPage(totalPages)}
           className="page-number"
         >
           {totalPages}
         </li>
       );
     }

       return pageNumbers;
     };
    
    return (
      <div className="shop_containere">
        <div className="products_container pt-4">
          <div className="product_grid">
            {isProductsLoading && <Spinner />}
            {renderProducts()}
          </div>
          <ul className="d-flex pageNuberContainer" type="none">
            {renderPageNumbers()}
          </ul>
        </div>
        <div className="cart_container">
          <h4>Order Summary</h4>
        </div>
      </div>
    );
};

export default Shop;