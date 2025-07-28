import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import './index.css';
import App from './App.jsx';
import { CartProvider } from './Context/CartContext.jsx';
import { AddressProvider } from './Context/AddressContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CartProvider>
      <AddressProvider> 
      <App />
      </AddressProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
