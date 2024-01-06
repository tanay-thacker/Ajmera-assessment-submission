import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import'./App.css';


function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Fetch product data
    fetch('https://fakestoreapi.com/products/')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleProductClick = (productId) => {
    // Fetch details of the selected product
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setSelectedProduct(data))
      .catch((error) => console.error('Error fetching product details:', error));
  };

  return (
    <div className="App">
      <div class="pl"><ProductList products={products} onItemClick={handleProductClick} /></div>
      <div class="pd"><ProductDetails product={selectedProduct} /></div>
    </div>
  );
}

export default App;

