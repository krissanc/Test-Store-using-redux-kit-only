
import { createStore } from 'redux';
import react, { useState, useEffect } from 'react'

const initialState = {
    count: 0
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: ++state.count };
        case 'DECREMENT':
            return { ...state, count: --state.count };
        default:
            return state;
    }
}

export const store = createStore(reducer);

function Cart() {

    const [state, setState] = store.getState();

    useEffect(() => {

        const unsubscribe = store.subscribe(() => {
            setState(store.getState())
        })

        return unsubscribe;

    }, [])



    return (
        <div className="top">
            <h1> Cart: {state.count} </h1>
            <button onClick={() => store.dispatch({ type: 'INCREMENT' })}> Increment </button>
            <button onClick={() => store.dispatch({ type: 'INCREMENT' })}> Decrement </button>
        </div>
    )

}

export default Cart;