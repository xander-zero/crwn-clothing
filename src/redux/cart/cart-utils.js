export const addItemToCart=(cartItems,cartItemToAdd)=>{
    const existingCartItem=cartItems.find(
        cartItem=>cartItem.id===cartItemToAdd.id
        )
    if(existingCartItem){
        return cartItems.map(cartItem=>
            cartItem.id===cartItemToAdd.id
            ? {...cartItem,quality:cartItem.quality+1}
            : cartItem
            )
    }
    return [...cartItems,{...cartItemToAdd,quality:1}]
}

export const removeItemFromCart=(cartItems,cartItemsToRemove)=>{
    const existingCartItem=cartItems.find(
        cartItem=>cartItem.id===cartItemsToRemove.id
        )
        if(existingCartItem.quality===1){
            return cartItems.filter(cartItem=>cartItem.id!==cartItemsToRemove.id)
        }
        return cartItems.map(
            cartItem=> cartItem.id===cartItemsToRemove.id ?
            {...cartItem,quality:cartItem.quality-1}
            : cartItem
        )
}