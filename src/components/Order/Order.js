import React, { useState } from 'react';
import Cart from '../../cart/Cart';
import { useLoaderData } from 'react-router-dom';
import cartsLoderProducts from '../../LoderProducts/LoderProducts';
import OrderCard from './OrderCard/OrderCard';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const savecart =useLoaderData();
    console.log(savecart);
    const [cart,setCart]=useState(savecart)
    // const carts = cartsLodercarts();
    // console.log(carts);
    const deleteHandler=(id)=>{
        const remaining =cart.filter(cart=>cart.id !== id);
        setCart(remaining);
        removeFromDb(id)
    };
    const clearCart =()=>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='product-container'>
            <div>
                {
                    cart.map(cart=><OrderCard
                    key={cart.id}
                    cart={cart}
                    deleteHandler={deleteHandler}
                    
                    ></OrderCard>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    clearCart={clearCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Order;