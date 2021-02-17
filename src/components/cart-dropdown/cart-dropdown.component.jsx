import React from 'react'
import CustomButton from '../custom-buttton/custom-buton.component';
import './cart-dropdown.styles.scss';

const CartDropdown=()=>(
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton style={{fontSize:'12px'}}>GO TO CHECKOUT</CustomButton>
    </div>
)
export default CartDropdown;