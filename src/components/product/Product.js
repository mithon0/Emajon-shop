import React from 'react';
import './Product.css'
const Product = (props) => {
    const{name,img,price,ratings,seller,category}=props.data;
    return (
        <div className='single-card'>
            <img src={img} alt="" />
            <div className='card-details'>
                <h5>{name}</h5>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <div>
            <button className='addToCart-btn'>Add to Cart</button>
           
            </div>

        </div>

    );
};

export default Product;