
import React, { useEffect } from 'react';
import { useCart } from '../Context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OrderSuccess = () => {
  const { clearCart } = useCart();

  
  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div style={{ paddingTop: '90px' }}>
      <Navbar />
      <div className="container text-center mt-5">
        <h1 className="text-success p-5">Order Placed Successfully!</h1>
        <p className="lead p-5">Thank you for shopping with us. Your order has been placed and is being processed.</p>
        
        <p className='p-3'>You will receive a confirmation email shortly.</p>
      </div>
    </div>
  );
};

export default OrderSuccess;

