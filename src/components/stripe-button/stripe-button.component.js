import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51HJuetFBFJv2c6epqdDgLUvHW3sJRKtkIM6nNrJa7jwFNruNoxYDAub0dLqkpRDH2yBtGNk7QGF7XMvatN4EVdXa00dq5O5UGW";
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return(
        <StripeCheckout 
           label='Pay Now'
           name='CRWN Clothing Ltd'
           billingAddress
           shippingAddress         
           image='https://sendeyo.com/up/d/f3eb2117da'
           description={`Your total is $${price}`}
           amount ={priceForStripe}
           panelLabel='Pay Now'
           token={onToken}
           stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton