// src/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css'; 

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: 'pastel desserts', 
          per_page: 20, // Number of images to fetch
          client_id: 'duX4ls_P3XC7yxMCPl1WiAJQGEJACSpQquvy2sUkTHs', 
        }
      });

      const productData = response.data.results.map((result, index) => ({
        id: index + 1,
        name: `Product ${index + 1}`,
        price: Math.floor(Math.random() * 100) + 1, // Generate random price for each item
        image: result.urls.regular, 
      }));

      setProducts(productData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="product-list-container"> {}
      <h2>Dessert Delight Co.</h2>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-item"> {}
            <img src={product.image} alt={product.name} className="product-image" /> {}
            <p className="product-name">{product.name}</p> {}
            <p className="product-price">${product.price}</p> {}
            <button onClick={() => addToCart(product)} className="add-to-cart-btn">Add to Cart</button> {}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;


