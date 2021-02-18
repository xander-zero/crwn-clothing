import React from 'react'
import './cart-item.styles.scss'

const CartItem=({cartItem:{imageUrl,name,price,quality}})=>(
    <div className='cart-item'>
        <img src={imageUrl} alt={name} />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quality} x ${price}</span>
        </div>
    </div>
)
export default CartItem;