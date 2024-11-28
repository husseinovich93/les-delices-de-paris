import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { cart } = state || {};
  
  const [selectedTip, setSelectedTip] = useState(0);

  const handleTipClick = (tip) => {
    setSelectedTip(tip);
  };

  const totalPrice = Object.values(cart || {}).reduce(
    (total, item) => total + parseFloat(item.price.slice(1)) * item.quantity,
    0
  );

  const tipAmount = selectedTip != null ? (totalPrice * selectedTip / 100) : 0;
  const taxAmount = totalPrice * 0.0875; // Tax rate for NYC (8.75%)

  const finalTotal = totalPrice + taxAmount + tipAmount;

  const handlePayment = () => {
    alert('Payment Successful! 🎉');
    // Pass the required details (cart, total, tip, etc.) when navigating to the receipt page
    navigate('/receipt', {
      state: {
        cart,
        totalPrice,
        selectedTip,
        taxAmount,
        finalTotal
      }
    });
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-header">Review Your Order</h1>
      {Object.values(cart || {}).map((item) => (
        <div key={item.name} className="order-item">
          <div className="order-item-details">
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${(item.price.slice(1) * item.quantity).toFixed(2)}</p>
          </div>
        </div>
      ))}

      <div className="tax-and-tip">
        <h2>Select a Tip</h2>
        <div className="tip-options">
          {[18, 20, 25, 0].map((tip) => (
            <button
              key={tip}
              className={`tip-button ${selectedTip === tip ? 'selected' : ''}`}
              onClick={() => handleTipClick(tip)}
            >
              {tip}% Tip
            </button>
          ))}
        </div>
      </div>

      <div className="tax-and-tip">
        <h2>Tax (8.75%): ${(taxAmount).toFixed(2)}</h2>
        <h2>Tip: ${(tipAmount).toFixed(2)}</h2>
      </div>

      <div className="total-price">
        <h2>Total: ${finalTotal.toFixed(2)}</h2>
      </div>

      <div className="payment-info">
        <h3>Payment Details</h3>
        <label>Card Number</label>
        <input type="text" placeholder="Enter card number" />
        <label>Expiration Date</label>
        <input type="text" placeholder="MM/YY" />
        <label>CVV</label>
        <input type="text" placeholder="CVV" />
      </div>

      <button className="checkout-button" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
};

export default Checkout;
