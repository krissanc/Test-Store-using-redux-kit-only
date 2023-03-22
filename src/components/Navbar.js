import React, { useEffect, useState } from 'react'
import { store } from './Cart.js'

import '../styles/navbar-style.css'


const Navbar = () => {

    const [state, setState] = useState(store.getState());
    const [expandCart, setExpandCart] = useState(false);


    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setState(store.getState());
        })
        return unsubscribe;
    }, [])

    function handleCartClick() {
        setExpandCart(!expandCart);
    }


    return (
        <nav>
            <div className="cart" onClick={handleCartClick}>
                <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt=""></img>
                <p> {state.count} </p>
            </div>
            {expandCart && <ExpandedCart />}
        </nav>
    )
}

export default Navbar;


function ExpandedCart() {

    const [state, setState] = useState(store.getState());

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setState(store.getState());
        })
        return unsubscribe;
    }, [])



    return (
        <div className="navbar-cart">
            {state.cart.map((product, index) => {
                return (
                    <div key={index} className="navbar-cart-item">
                        <img src={product.image} alt=""></img>
                        <div className="navbar-cart-item-info">
                            <p> {product.name} </p>
                            <p> {product.price} </p>
                            <button onClick={() => { store.dispatch({ type: 'REMOVEFROMCART', payload: { ...product, indexInCart: index } }) }}> x </button>
                        </div>
                    </div>
                )
            })}
            <p> total: {state.total} </p>
        </div>
    )
}
