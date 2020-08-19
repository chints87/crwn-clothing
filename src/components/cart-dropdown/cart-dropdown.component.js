import React from 'react';
import { connect } from 'react-redux';

import CustomButtom from '../custom-button/custom-button.component';
import CardItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart-selector';
import './cart-dropdown.scss'

const CartDropDown = ({ cartItems }) =>(
    <div className="cart-dropdown">
       <div className="cart-items">{
           cartItems.map(cartItem => 
            <CardItem key={cartItem.id} item={cartItem}/>)
        }</div>          
       <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>

)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropDown);