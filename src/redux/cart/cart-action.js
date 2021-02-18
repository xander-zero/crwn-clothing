import CartActionTypes from './cart-action-type'

export const toggleCartHidden=()=>({
    type:CartActionTypes.CART_ACTION_TYPES
})

export const clearItemFromCart=(item)=>({
    type:CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item
})

export const removeItem=item=>({
    type:CartActionTypes.REMOVE_ITEM,
    payload:item
})

export const addItems=item=>({
    type:CartActionTypes.ADD_CART,
    payload:item
})