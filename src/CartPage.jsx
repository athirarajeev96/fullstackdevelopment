import React from 'react';
import { useCart } from './CartContext';
import iphone9 from './assets/iphone9.jpg';
import iphonex from './assets/iphonex.jpg';
import samsungUniverse9 from './assets/samsung_universe 9.jpg';
import oppof19 from './assets/oppof19.jpg';
import huaweip30 from './assets/huaweip30.jpg';
import './index.css'; // Importing the CSS file

// Map product IDs to imported images
const productImages = {
  1: iphone9,
  2: iphonex,
  3: samsungUniverse9,
  4: oppof19,
  5: huaweip30
};

function CartPage() {
  const { products, increaseQuantity, decreaseQuantity } = useCart();

  const totalQuantity = products.reduce((total, product) => total + product.quantity, 0);
  const totalAmount = products.reduce((total, product) => total + (product.price * product.quantity), 0);

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {products.map(product => (
          <div className="cart-item" key={product.id}>
            <img src={productImages[product.id]} alt={product.title} className="product-image" />
            <div className="product-details">
              <h5>{product.title}</h5>
              <p>${product.price}</p>
              <div className="quantity-control">
                <button onClick={() => decreaseQuantity(product.id)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => increaseQuantity(product.id)}>+</button>
              </div>
              <p>Total: ${product.price * product.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total Quantity: {totalQuantity}</h2>
        <h2>Total Amount: ${totalAmount}</h2>
      </div>
    </div>
  );
}

export default CartPage;
