import React from 'react'
import {ReactComponent as ShopingIcon} from '../../assets/shopping-bag.svg'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart-action'
import {selectCartItemsCount} from '../../redux/cart/cart-selector'
import './cart-icon.styles.scss'


const CartIcon=({toggleCartHidden,cartCount})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShopingIcon className='shoping-icon' />
        <span className='item-count'>{cartCount}</span>
    </div>
)

const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})

const mapStateToProps=(state)=>({
    cartCount:selectCartItemsCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);