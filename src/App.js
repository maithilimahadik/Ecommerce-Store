// src/App.js
import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = product => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = product => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  return (
    <div>
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
