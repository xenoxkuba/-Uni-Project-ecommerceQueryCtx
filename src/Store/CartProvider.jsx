import React, { useState } from "react";
import { CartContext } from "./cart-context";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id, title, price) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.title === title);
      if (existingItem) {
        const updatedItems = prevItems.map((item) => {
          if (item.title === title) {
            return {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.totalPrice + price,
            };
          }
          return item;
        });
        return updatedItems;
      }
      return [
        ...prevItems,
        { id, title, price, quantity: 1, totalPrice: price },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === id);
      const item = prevItems[itemIndex];
      if (item.quantity > 1) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex] = {
          ...item,
          quantity: item.quantity - 1,
          totalPrice: item.totalPrice - item.price,
        };
        return updatedItems;
      } else {
        return prevItems.filter((item) => item.id !== id);
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
