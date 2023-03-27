import React, { useEffect, useState } from 'react';
import Cart from '../../cart/Cart';


import Product from '../product/Product';
import './Products.css'
const Products = () => {
    const [shopData,setShopDAta]=useState([]);
    const [cart,setCart]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setShopDAta(data))
    },[])

// addTocart handlar
const addToCart =(product)=>{
    // console.log("clicked" ,product);
    const newCart=[...cart,product]
    setCart(newCart);
}

    return (
        <div className='product-container'>
           <div className='card-container'>
           <div className='card'>
           {
            shopData.map(shope=><Product
            key={shope.id}
            data={shope}
            addToCart={addToCart}
            ></Product>)
           }
           </div>
           </div>
          <div className='cart-container'>
         <Cart
         cart={cart}
         ></Cart>
          </div>
        </div>
    );
};

export default Products;