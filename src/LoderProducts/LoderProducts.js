import { getShoppingCart } from "../utilities/fakedb";

const cartsLoderProducts = async ()=>{
const loaderProducts = await fetch('products.json');
const products =await loaderProducts.json();

const storedCart =getShoppingCart();
const savedCart = [];
for (const id in storedCart){
    const addedCart =products.find(pd =>pd.id=== id)

    if(addedCart){
        const quantity= addedCart.quantity;
        storedCart[id]=quantity;
        savedCart.push(addedCart);
    }
}
return savedCart
}

export default cartsLoderProducts;