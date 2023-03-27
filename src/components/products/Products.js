import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Products.css'
const Products = () => {
    const [shopData,setShopDAta]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setShopDAta(data))
    },[])

    return (
        <div className='product-container'>
           <div className='card-container'>
           <div className='card'>
           {
            shopData.map(shope=><Product
            key={shope.id}
            data={shope}
            ></Product>)
           }
           </div>
           </div>
           <div className='summary'>
            <h6>Order Summary</h6>
            <div className='details'>
            <p>Selected Items:</p>
            <p>Total Price:</p>
            <p>Total Shipping Charge:</p>
            <p>Tax:</p>
            <h2>Grand Total: </h2>
            </div>
            <button className='clearBtn'>Clear Cart</button>
            <button className='reviewBtn'>Review Order</button>
           </div>
        </div>
    );
};

export default Products;