import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/AppSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
