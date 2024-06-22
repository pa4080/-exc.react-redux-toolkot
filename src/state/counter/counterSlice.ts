import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
     * > increment: (state, action: PayloadAction<any>) => {...}
     */
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    /**
     * The action.payload, could be any type. For example:
     * > incrementByAmount: (state, action: PayloadAction<{ amount: number }>) => {
     * >   state.value += action.payload.amount;
     * > }
     */
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
