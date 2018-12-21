const addToCart =  porducto => {
    return {
        type: "ADD_TO_CART",
        porducto
    }
}

const removeAddToCart = porducto => {
    return {
        type: "REMOVE_FROM_CART",
        porducto //this.props.productosCart
    }
}

export { addToCart, removeAddToCart }