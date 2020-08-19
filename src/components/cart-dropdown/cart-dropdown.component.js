import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { withRouter } from 'react-router'

import CustomButtom from '../custom-button/custom-button.component';
import CardItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart-selector';
import './cart-dropdown.scss'

const CartDropDown = ({ cartItems, history }) =>(
    <div className="cart-dropdown">
       <div className="cart-items">{
           cartItems.length? (
           cartItems.map(cartItem => ( 
            <CardItem key={cartItem.id} item={cartItem}/>)))
            : (<span className="empty-message">Your cart is empty</span>)
        }</div>          
       <CustomButtom onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButtom>
    </div>

)

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown));