import CartActionTypes from './cart-action-type'

export const toggleCartHidden=()=>({
    type:CartActionTypes.CART_ACTION_TYPES
})

export const addItems=item=>({
    type:CartActionTypes.ADD_CART,
    payload:item
})