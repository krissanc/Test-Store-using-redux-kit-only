import React, { useState, useEffect } from 'react';
import { createStore } from 'redux';

// import component specific styles
import '../styles/count-style.css'

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

const store = createStore(reducer);

function Count() {

    // create our useState hook to keep track of the store state
    const [state, setState] = useState(store.getState());

    // call the useEffect hook to subscribe to the store
    useEffect(() => {

        // subscribe our useState hook to the store
        const unsubscribe = store.subscribe(() => {
            // sets the state from our hook to the store object
            setState(store.getState());
        })
        // get our unsubscribe function that calls when 'Count' component is unmounted
        return unsubscribe;

    }, []);



    return (

        <div className="top">
            <h1> Count: {state.count} </h1>
            <div className="cart-buttons">
                <button onClick={() => { store.dispatch({ type: 'INCREMENT' }) }}> Increment </button>
                <button onClick={() => { store.dispatch({ type: 'DECREMENT' }) }}> Decrement </button>
            </div>
        </div>
    )
}

export default Count;

