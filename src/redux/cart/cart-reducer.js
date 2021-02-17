import CartActionTypes from './cart-action-type'
import {addItemToCart} from './cart-utils'
const INITIAL_STATE={
    hidden:true,
    cartItems:[]
}

const cartReducer=(state=INITIAL_STATE,action)=>{
    console.log(CartActionTypes.CART_ACTION_TYPES);
    switch(action.type){
        case CartActionTypes.CART_ACTION_TYPES:
            return{
                ...state,
                hidden:!state.hidden
        }
        case CartActionTypes.ADD_CART:
        return{
            ...state,
            cartItems:addItemToCart(state.cartItems,action.payload)
        }
        default :
        return state;
    }
}
export default cartReducer;