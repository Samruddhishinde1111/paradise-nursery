import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;

export default store;
