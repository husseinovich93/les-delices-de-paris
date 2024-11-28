// src/Receipt.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Receipt.css';

const Receipt = () => {
  const { state } = useLocation();
  
  // Safe destructuring with fallback values
  const {
    cart = {},
    totalPrice = 0,
    selectedTip = 0,  // Ensure selectedTip is received
    taxAmount = 0,
    finalTotal = 0,
  } = state || {};

  // Calculate tipAmount in the Receipt component
  const tipAmount = selectedTip ? (totalPrice * selectedTip / 100) : 0;

  return (
    <div className="receipt-container">
      <h1>Thank you for your order!</h1>
      <h2>Your Receipt:</h2>

      <div className="receipt-items">
        {Object.values(cart).length > 0 ? (
          Object.values(cart).map((item) => (
            <div key={item.name} className="receipt-item">
              <h3>{item.name} x {item.quantity}</h3>
              <p>Price: ${(item.price.slice(1) * item.quantity).toFixed(2)}</p>
            </div>
          ))
        ) : (
          <p>No items in your order.</p>
        )}
      </div>

      <div className="receipt-summary">
        <h3>Tax (8.75%): ${(taxAmount).toFixed(2)}</h3>
        <h3>Tip: ${(tipAmount).toFixed(2)}</h3>
        <h2>Total: ${finalTotal.toFixed(2)}</h2>
      </div>
      
      <div className="payment-summary">
        <h2>Payment Successful!</h2>
        <p>Your payment has been processed successfully. Thank you for choosing us!</p>
      </div>
    </div>
  );
};

export default Receipt;
