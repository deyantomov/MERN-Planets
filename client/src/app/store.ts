import { configureStore } from '@reduxjs/toolkit';
import coordinateReducer from './features/coordinates/coordinateSlice'; // Adjust the import path as necessary

export const store = configureStore({
  reducer: {
    coordinates: coordinateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;