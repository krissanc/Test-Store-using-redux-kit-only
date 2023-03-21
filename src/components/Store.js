import React from 'react'
import { store } from './Cart.js'

import Products from '../Products.js'

import '../styles/store-style.css'

const Store = () => {
    return (


        <div className="store">

            {Products.map((product) => {
                return (
                    <div className="product">
                        <p> {product.name} </p>
                        <img src={product.image} alt=""></img>
                        <p> {product.price} </p>
                        <button onClick={() => store.dispatch({ type: 'INCREMENT' })}> Add to cart </button>
                    </div>
                )
            })}

        </div>



    )
}

export default Store;