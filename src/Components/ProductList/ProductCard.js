
import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img className="product-image" src={product.imageLink} alt={product.productName} />
      <div className="product-details">
        <div className="product-name">{product.productName}</div>
        <div className="product-price">Price: ${product.offerPrice}</div>
      </div>
    </div>
  );
}

export default ProductCard;
