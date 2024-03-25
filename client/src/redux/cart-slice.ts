import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type cartItem = {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
  quantity: number;
};
type cartItems = {
  items: cartItem[];
};

const initialState: cartItems = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    Add(
      state,
      action: PayloadAction<{
        id: number;
        image: string;
        title: string;
        price: number;
        description: string;
      }>
    ) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    Remove(state, action: PayloadAction<{ id: number }>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.items[itemIndex].quantity === 1) {
        state.items.pop();
      } else {
        state.items[itemIndex].quantity--;
      }
    },
    RemoveItem(state, action: PayloadAction<{ id: number }>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.items[itemIndex].quantity > 0) {
        state.items.pop();
      }
    },
  },
});

export const { Add, Remove, RemoveItem } = cartSlice.actions;
export default cartSlice.reducer;
