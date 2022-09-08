import { configureStore } from '@reduxjs/toolkit';
import characterSlice from './characters';

const store = configureStore({
  reducer: {
    characterSlice,
  },
});

export default store;
