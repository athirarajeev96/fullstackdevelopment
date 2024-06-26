// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialProducts = [
  { id: 1, title: "iPhone 9", price: 549, quantity: 0 },
  { id: 2, title: "iPhone X", price: 899, quantity: 0 },
  { id: 3, title: "Samsung 9", price: 1249, quantity: 0 },
  { id: 4, title: "OPPOF19", price: 280, quantity: 0 },
  { id: 5, title: "Huawei P30", price: 499, quantity: 0 },
];

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: initialProducts,
  },
  reducers: {
    increaseQuantity: (state, action) => {
      const product = state.products.find(p => p.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.products.find(p => p.id === action.payload);
      if (product && product.quantity > 0) {
        product.quantity -= 1;
      }
    },
  },
});

export const { increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;