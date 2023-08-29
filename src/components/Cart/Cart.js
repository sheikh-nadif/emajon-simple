import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for (const product of cart){
        total = total + product.price;
    }

    const shipping = 25;
    const tax = (total * (0.15));
    const grandTotal = total + shipping + tax;
    return (
        <div className='body'>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {props.cart.length}</h5>
            <br />
            <p>Total: {total.toFixed(2)} $</p>
            <p>Shipping: {shipping.toFixed(2)} $</p>
            <p>Tax: {tax.toFixed(2)} $ <small>[15 %]</small></p>
            <p><strong>Grand Total: {grandTotal.toFixed(2)} $</strong></p>
        </div>
    );
};

export default Cart;