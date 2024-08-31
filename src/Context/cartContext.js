import React, { createContext, useContext, useState, useMemo, useCallback, useEffect } from 'react';

// Create the context
const CartContext = createContext();

// Helper function to calculate the total price
const calculateTotalPrice = (cart) => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
};

// Helper function to calculate the total item count
const calculateItemCount = (cart) => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};

// Load cart from localStorage
const loadCartFromStorage = () => {
  try {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("Failed to load cart from localStorage", error);
    return [];
  }
};

// Save cart to localStorage
const saveCartToStorage = (cart) => {
  try {
    localStorage.setItem('cart', JSON.stringify(cart));
  } catch (error) {
    console.error("Failed to save cart to localStorage", error);
  }
};

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(loadCartFromStorage);
  const [notification, setNotification] = useState({ type: '', message: '' });

  useEffect(() => {
    saveCartToStorage(cart);
  }, [cart]);

  const addToCart = useCallback((product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
      const updatedCart = [...prevCart];

      if (existingProductIndex > -1) {
        // Product already exists in the cart, update quantity
        updatedCart[existingProductIndex].quantity += product.quantity;
        setNotification({ type: 'update', message: `${product.title} quantity updated` });
      } else {
        // New product, add to cart
        updatedCart.push(product);
        setNotification({ type: 'add', message: `${product.title} added to cart` });
      }

      return updatedCart;
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCart((prevCart) => {
      const item = prevCart.find(item => item.id === productId);
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      if (item) {
        setNotification({ type: 'remove', message: `${item.title} removed from cart` });
      }
      return updatedCart;
    });
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
    setNotification({ type: 'clear', message: 'Cart cleared' });
  }, []);

  const value = useMemo(() => ({
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    totalPrice: calculateTotalPrice(cart),
    itemCount: calculateItemCount(cart),
    notification
  }), [cart, addToCart, removeFromCart, clearCart, notification]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Create a custom hook to use the CartContext
export const useCart = () => useContext(CartContext);
