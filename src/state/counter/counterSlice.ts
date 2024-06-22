import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    /**
     * Note ReduxToolkit automatically creates a copy of the state and returns it.
     * It looks a little bit confusing (here), but it doesn't mutate the state directly.
     *
     * The reducers also takes an action as an argument:
     * > increment: (state, action) => {...}
     */
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
