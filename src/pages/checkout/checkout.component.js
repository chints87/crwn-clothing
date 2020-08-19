import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selector';

import './checkout.scss'


const CheckoutPage = ({ cartItems, totalPrice }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="checkout-header-block"></div>
        <span>Product</span>
      <div className="checkout-header-block"></div>
        <span>Description</span>
      <div className="checkout-header-block"></div>
        <span>Quantity</span>
      <div className="checkout-header-block"></div>
        <span>Price</span>
      <div className="checkout-header-block"></div>
        <span>Remove</span>
    </div>
    {cartItems.map((cartItem) => (
      <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
    ))}
    <div className="total">
      <span>TOTAL: ${totalPrice}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
   totalPrice: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);