import React, { useEffect, useState } from 'react'
import { store } from './Cart.js'

import '../styles/navbar-style.css'


const Navbar = () => {

    const [state, setState] = useState(store.getState());


    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setState(store.getState());
        })
        return unsubscribe;
    }, [])


    return (
        <nav>
            <div className="cart">
                <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt=""></img>
                <p> {state.count} </p>

            </div>
        </nav>
    )
}

export default Navbar