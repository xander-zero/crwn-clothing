import React from 'react'
import CustomButton from '../custom-buttton/custom-buton.component';
import {connect} from 'react-redux'
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown=({cartItems})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem=>(
               <CartItem key={cartItem.id} item={cartItem} />
            ))}  
        </div>
        <CustomButton style={{fontSize:'12px'}}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps=({cart:{cartItems}})=>({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);