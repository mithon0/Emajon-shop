import React, { useEffect, useState } from 'react';
import Cart from '../../cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';


import Product from '../product/Product';
import './Products.css'
const Products = () => {
    const [shopData, setShopDAta] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setShopDAta(data))
    }, [])

    // local storage effect 
    useEffect(() => {
        const storedCart = getShoppingCart();
        // console.log(storedCart);
        const savedCart = [];
        for (const id in storedCart) {

            const addedProduct = shopData.find(product => product.id === id)

            if (addedProduct) {
                const quantity = addedProduct.quantity;
                storedCart[id] = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);

    }, [shopData])
    // addTocart handlar
    const addToCart = (product) => {
        // console.log("clicked" ,product);
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.id)
    };
    const clearCart =()=>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='product-container'>
            <div className='card-container'>
                <div className='card'>
                    {
                        shopData.map(shope => <Product
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
                    clearCart={clearCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Products;