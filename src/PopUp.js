import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useRef, useState } from "react";
import "./popup.css";
function PopUp(selectedProduct) {
  const handleClose = () => {
    selectedProduct.onClose(null);
  };
  return (
    <div>
      <div className="popup">
        <div className="popup-content">
          <img src={selectedProduct.image} alt={selectedProduct.name} />
          <h2 className="name">{selectedProduct.name}</h2>
          <p className="price">{selectedProduct.price} грн / кг</p>
          <p>{selectedProduct.description}</p>
          <button onClick={handleClose}>Закрити</button>
        </div>
      </div>
    </div>
  );
}
export default PopUp;
