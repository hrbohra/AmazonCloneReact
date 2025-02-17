import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import products from './data/products';
import './App.css';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <Router>
      <div className="app">
        <Navbar cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />
        
        <Routes>
          <Route path="/" element={
            <div className="main-content">
              <div className="hero">
                <div className="hero-content">              
                  
                  
                </div>
              </div>
              <div className="product-grid">
                {products.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    addToCart={addToCart} 
                  />
                ))}
              </div>
            </div>
          } />
          
          <Route path="/product/:id" element={
            <ProductDetails products={products} addToCart={addToCart} />
          } />
          
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;