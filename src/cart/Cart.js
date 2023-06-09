import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight, faCartShopping, faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = ({cart,clearCart}) => {
    

    let total = 0;
    let totalShiping = 0;
    let quantity = 0;

    for (const mainTime of cart) {
        if(mainTime.quantity === 0){
            mainTime.quantity = 1;
        }

        total = total + mainTime.price * mainTime.quantity;
        totalShiping = totalShiping + mainTime.shipping;
        quantity = quantity + mainTime.quantity *mainTime.quantity;
    }

    let tex = total * 7 / 100;
    let grandTotal = total + totalShiping + tex;
    return (
        <div className='cart'>
            <div className='summary'>
                <h6>Order Summary</h6>
                <div className='details'>
                    <p>Selected Items: <span className='a'>{quantity}</span></p>
                    <p>Total Price: <span>${total}</span></p>
                    <p>Total Shipping Charge: <span>${totalShiping}</span></p>
                    <p>Tax: <span>${tex.toFixed(2)}</span></p>
                    <h2>Grand Total: <span>${grandTotal.toFixed(2)}</span> </h2>
                </div>
                <button onClick={clearCart} className='clearBtn'>Clear Cart <FontAwesomeIcon icon={faTrash} /></button>
                <button className='reviewBtn'>Review Order <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
            </div>
        </div>
    );
};

export default Cart;