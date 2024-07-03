import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  coordinates: Record<string, Array<number>>;
}

const initialState: CounterState = {
  coordinates: {},
};

export const coordinateSlice = createSlice({
  name: 'coordinates',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Record<string, Array<number>>>) => {
      state.coordinates = action.payload;
    },
  },
});

// Export the action creators
export const { set } = coordinateSlice.actions;

export default coordinateSlice.reducer;