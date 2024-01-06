import React from 'react';
import'./ProductList.css';

const ProductList = ({ products, onItemClick }) => {
  return (
    <div class="ProdList">
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} onClick={() => onItemClick(product.id)}>
            <div class="imgcls"><img id="smlimg" src={product.image} alt={product.title} /></div>
            <div>
          <p id="cat-list">{product.category}</p>

            <p id="title-list">{product.title}</p>
            <p id="desc-list">{product.description}</p>
          <p id="price-list">${product.price}</p>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

