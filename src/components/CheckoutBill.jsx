import React, { useContext } from 'react';
import { CartContext } from '../store/shopping-cart-context.jsx';

const CheckoutBill = ({ onClose }) => {
  const { items } = useContext(CartContext);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxRate = 0.18; // 18% tax rate
  const taxAmount = subtotal * taxRate;
  const total = subtotal + taxAmount;

  return (
    <div className="checkout-bill-overlay">
      <div className="checkout-bill">
        <div className="checkout-bill-header">
          <h2>Order Summary</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <div className="checkout-bill-items">
          {items.map((item) => (
            <div key={item.id} className="checkout-bill-item">
              <span>{item.name} (x{item.quantity})</span>
              <span>₹{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="checkout-bill-summary">
          <div className="checkout-bill-row">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="checkout-bill-row">
            <span>Tax (18%)</span>
            <span>₹{taxAmount.toFixed(2)}</span>
          </div>
          <div className="checkout-bill-row total">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
        </div>

        <button 
          className="checkout-button"
          onClick={() => {
            // Handle payment logic here
            alert('Payment processed!');
            onClose();
          }}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutBill;