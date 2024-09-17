import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const placeOrder = () => {
    setOrderPlaced(true);
  };

  return (
    <div className='cart-container'>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p className='cart-empty'>Your cart is empty</p>
      ) : (
        <ul className='cart-items'>
          {cartItems.map(item => (
            <li key={item.id} className='cart-item'>
              {item.name} - Rs.{item.price}
              <button onClick={() => removeFromCart(item)} className='remove-btn'>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && !orderPlaced && (
        <button onClick={placeOrder} className='place-order-btn'>Place Order</button>
      )}
      {orderPlaced && <p className='order-message'>Thank you for ordering!</p>}
    </div>
  );
};

export default Cart;
