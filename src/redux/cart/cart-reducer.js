import CartActionTypes from './cart-action-type'
const INITIAL_STATE={
    hidden:true
}

const cartReducer=(state=INITIAL_STATE,action)=>{
    console.log(CartActionTypes.CART_ACTION_TYPES);
    switch(action.type){
        case CartActionTypes.CART_ACTION_TYPES:
            return{
                ...state,
                hidden:!state.hidden
        }
        default :
        return state;
    }
}
export default cartReducer;