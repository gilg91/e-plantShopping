import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const newItem = action.payload;
        const existingItem = state.items.find(item => item.name === newItem.name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            state.items.push({ ...newItem, quantity: 1 });
        }
    },

    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
    },


    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const item = state.items.find((i) => i.name === name);
        if (item) {
            if (quantity > 0) {
            item.quantity = quantity;
            } else {
            state.items = state.items.filter((i) => i.name !== name);
            }
        }
    },

  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
