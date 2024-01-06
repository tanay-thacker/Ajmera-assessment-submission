import React from 'react';
import'./ProductDetails.css';

const ProductDetails = ({ product }) => {
  return (
    
    <div class="ProdDetails">
      {product && (
        <div>
          <img id="image" src={product.image} alt={product.title} />
          <p id="cat">{product.category}</p>
          <p id="title">{product.title}</p>
          <p id="desc">{product.description}</p>

          <p id="rating"><b>{product.rating.rate}</b> ({product.rating.count} reviews)</p>
          <p id="price">${product.price}</p>
          
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
