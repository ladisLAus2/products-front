import "./App.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import PopUp from "./PopUp";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://kmi-products-api/getalldata");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const openPopup = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <div className="container">
        <h1 className="title">Ковбасна продукція</h1>
        <div className="products-container">
          {products.map((product) => (
            <div
              className="product"
              key={product.id}
              onClick={() => openPopup(product)}
            >
              <img src={product.image} alt={product.name} />
              <h2 className="name">{product.name}</h2>
              <p className="price">{product.price} грн / кг</p>
            </div>
          ))}
        </div>
      </div>
      {selectedProduct && (
        <PopUp {...selectedProduct} onClose={setSelectedProduct} />
      )}
    </div>
  );
}

export default App;
