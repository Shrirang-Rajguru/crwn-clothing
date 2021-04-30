import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceFOrStripe = price * 100;
    const publishableKey = "pk_test_51Ilv4USJhT6k8wFMvrBktpNs35Nf84uajYXMzr6frIElaIDrUrP58rxovEmHVjwBJHqkVg7JIZqbRRXpOBI9JIfV00kV4IPWee";
    
    const onToken = token => {
        console.log(token);
        alert(' Payement Successfull!');
    }

    return (
        <StripeCheckout 
        label = 'Pay Now'
        name = 'CROWN CLOTHING LTD.'
        billingAddress
        shippingAddress
        image = "https://svgshare.com/i/CUz.svg"
        description = {`Yout Total is $${ price }`}
        amount = { priceFOrStripe }
        panelLabel = 'PAY NOW'
        token = { onToken }
        stripeKey = { publishableKey }
        />
    );
};

export default StripeCheckoutButton;