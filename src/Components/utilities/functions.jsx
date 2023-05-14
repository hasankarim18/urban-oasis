import Product from "../Products/Product";
import React from "react";





const useRenderProducts = (currentProducts) => {
 return currentProducts.map((product) => {
    // console.log(product);
   return <Product product={product} key={product._id} />
  //  return <h1>Product</h1>
  });
};

// 

 const useRenderPageNumbers = (totalPages, currentPage, setCurrentPage) => {
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
    


export { useRenderProducts, useRenderPageNumbers };