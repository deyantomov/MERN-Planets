import { configureStore } from '@reduxjs/toolkit';
import coordinateReducer from './features/coordinates/coordinateSlice';

export const store = configureStore({
  reducer: {
    coordinates: coordinateReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;