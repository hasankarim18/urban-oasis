import baseUrl from "../Components/utilities/baseUrl"
import { getShoppingCart } from "../Components/utilities/fakedb"


const cartProductsLoader = async ()=> {
    const storedCart = getShoppingCart();
   // console.log(storedCart);
    const ids = Object.keys(storedCart)
   // console.log(ids);
    const loadedproduts = await fetch(`${baseUrl}/productsById`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ids),
    });
    const products = await loadedproduts.json()

 //   console.log(products);

    // if cart dat is in database, you have to use async await

 

    

     const savedCart = []

     if(products.length > 0){
         for (const id in storedCart) {
           const addedProducts = products.find((pd) => pd._id === id);
           if (addedProducts) {
             const quantity = storedCart[id];
             addedProducts.quantity = quantity;
             savedCart.push(addedProducts);
           }
         }
         
     }

   

    // if you need to send two things 
    // ** make array of object

   // return [products, savedCart]
   // return {products, cart:savedCart}

   console.log(savedCart);
    

    return savedCart;
}

export {cartProductsLoader}