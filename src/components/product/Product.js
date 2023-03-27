import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const{name,img,price,ratings,seller,category}=props.data;
    const addToCart=props.addToCart;
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
            <button onClick={()=>addToCart(props.data)} className='addToCart-btn'>Add to Cart <FontAwesomeIcon icon={faCartShopping} /></button>
           
            </div>
            
        </div>

    );
};

export default Product;