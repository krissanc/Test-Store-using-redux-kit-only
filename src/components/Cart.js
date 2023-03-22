
import { createStore } from 'redux';

const initialProductState = {
    cart: [],
    count: 0,
    total: 0,
}

function reducer(state = initialProductState, action) {
    switch (action.type) {
        case 'ADDTOCART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
                count: state.count + 1,
                total: state.total + action.payload.price
            };
        case 'REMOVEFROMCART':
            return {
                ...state,
                cart: [...state.cart.filter(item => item.id !== action.payload.indexInCart)],
                count: state.count - 1,
                total: state.total - action.payload.price
            }
        default:
            return state;
    }
}

export const store = createStore(reducer);