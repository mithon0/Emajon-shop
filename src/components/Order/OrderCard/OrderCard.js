import React from 'react';
import './OrderCard.css'


const OrderCard = ({cart,deleteHandler}) => {
    const {img,name,price,quantity,shipping,id}=cart;
    return (
        <div className='rv-container'>
            <div className='reviwe-container'>
                <img src={img} alt="" />
                <div>
                    <h1>name:{name}</h1>
                    <p>price:{price}</p>
                    <p>quantity:{quantity}</p>
                    <p>shipping:{shipping}</p>
                </div>
                </div>
                <button onClick={()=>deleteHandler(id)}>d</button>
        </div>
    );
};

export default OrderCard;