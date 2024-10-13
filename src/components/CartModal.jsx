import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Cart from './Cart.jsx';
import CheckoutBill from './CheckoutBill.jsx';

const CartModal = forwardRef(function Modal({ title, actions }, ref) {
  const dialog = useRef();
  const [showCheckoutBill, setShowCheckoutBill] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current.showModal();
    },
  }));

  const handleCheckout = () => {
    setShowCheckoutBill(true);
  };

  const handleCloseCheckoutBill = () => {
    setShowCheckoutBill(false);
  };

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>{title}</h2>
      <Cart />
      <form method="dialog" id="modal-actions">
        {actions}
        <button type="button" onClick={handleCheckout}>Checkout</button>
      </form>
      {showCheckoutBill && <CheckoutBill onClose={handleCloseCheckoutBill} />}
    </dialog>,
    document.getElementById('modal')
  );
});

export default CartModal;