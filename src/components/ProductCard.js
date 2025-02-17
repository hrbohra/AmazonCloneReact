import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
    <Link to={`/product/${product.id}`} className="details-link">
      <img src={product.image} alt={product.name} /> </Link>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <div className="product-actions">
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        
      </div>
    </div>
  );
};

export default ProductCard;