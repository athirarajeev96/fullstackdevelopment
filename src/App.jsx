import React from 'react';
import { CartProvider } from './CartContext'; // Importing the CartProvider from CartContext
import CartPage from './CartPage'; // Importing the CartPage component

function App() {
  return (
    <CartProvider> {/* Wrapping the application in the CartProvider */}
      <div className="App">
        <CartPage /> {/* Rendering the CartPage component */}
      </div>
    </CartProvider>
  );
}

export default App;
