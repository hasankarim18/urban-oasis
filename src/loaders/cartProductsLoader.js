import { getShoppingCart } from "../Components/utilities/fakedb"


const cartProductsLoader = async ()=> {
    const loadedproduts = await fetch('products.json')
    const products = await loadedproduts.json()

    // if cart dat is in database, you have to use async await

    const storedCart = getShoppingCart()

    

     const savedCart = []

    for(const id in storedCart){
        const addedProducts = products.find(pd => pd.id === id )
        if(addedProducts){
            const quantity = storedCart[id]
            addedProducts.quantity = quantity;
            savedCart.push(addedProducts)
        }
    }

    // if you need to send two things 
    // ** make array of object

   // return [products, savedCart]
   // return {products, cart:savedCart}
    

    return savedCart;
}

export {cartProductsLoader}