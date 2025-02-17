import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-details">
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '300px', height: 'auto' }} // Adjust the width and height as needed
      />
      <div className="details-info">
        <h1>{product.name}</h1>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
