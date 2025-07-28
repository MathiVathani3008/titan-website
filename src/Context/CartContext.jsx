import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  
  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });

    
    setSelectedItems(prev => [...prev, product.id]);
  };

  
  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
    setSelectedItems(prev => prev.filter(id => id !== productId));
  };

  
  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };


  const increaseQuantity = (productId) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  
  const decreaseQuantity = (productId) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  
  const toggleSelectItem = (id) => {
    setSelectedItems(prev =>
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  
  const selectAll = () => {
    setSelectedItems(cartItems.map(item => item.id));
  };

  
  const deselectAll = () => {
    setSelectedItems([]);
  };
  const clearCart = () => {
  setCartItems([]);
};


  
  const isSelected = (id) => selectedItems.includes(id);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        isInCart,
        increaseQuantity,
        decreaseQuantity,
        selectedItems,
        toggleSelectItem,
        selectAll,
        deselectAll,
        isSelected,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

