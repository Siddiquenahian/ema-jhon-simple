import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart; //option-1
    //const {cart} = props; option-2

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart){
        product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = total*7/100;
    const grandTotal = total + shipping + tax;
  return (
    <div className='cart'>
      <h3>Order Summary</h3>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Shipping: ${shipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
    </div>
  );
};
import './Cart.css';
export default Cart;
