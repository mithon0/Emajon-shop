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
           <div>
            <h1>product details</h1>
           </div>
        </div>
    );
};

export default Products;