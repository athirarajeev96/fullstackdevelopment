import React, { createContext, useState, useContext } from 'react';

// Create a context
const CartContext = createContext();

// Define the initial state
const initialProducts = [
  { id: 1, title: "iPhone 9", price: 549, quantity: 0 },
  { id: 2, title: "iPhone X", price: 899, quantity: 0 },
  { id: 3, title: "Samsung 9", price: 1249, quantity: 0 },
  { id: 4, title: "OPPOF19", price: 280, quantity: 0 },
  { id: 5, title: "Huawei P30", price: 499, quantity: 0 },
];

// Create the provider component
export function CartProvider({ children }) {
  const [products, setProducts] = useState(initialProducts);

  const increaseQuantity = (id) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    ));
  };

  const decreaseQuantity = (id) => {
    setProducts(products.map(product =>
      product.id === id && product.quantity > 0 ? { ...product, quantity: product.quantity - 1 } : product
    ));
  };

  return (
    <CartContext.Provider value={{ products, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

// Create a custom hook to use the cart context
export function useCart() {
  return useContext(CartContext);
}


