import { createStore } from 'redux';

export default createStore((state, action) => {
    if (action.type === "ADD_TO_CART") {
        return {
            ...state,
            cart: state.cart.concat(action.itemCart),// action.itemCart,
            item: action.item,

        }
    } else if (action.type === "FILTER_TO_CART") {
        return {
            ...state,
            listCarts: state.listCarts.concat(action.listCarts),
        }
    }

    return state;
}, { item: 0, cart: [], listCarts: [] })

