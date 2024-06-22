import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
  extraReducers: (builder) => {
    /**
     * We can chain as many Cases as we need (related ot the same reducer4) to a single builder.
     * ...Here we chain the "pending" and "fulfilled" cases for the "incrementAsync" action.
     */
    builder
      .addCase(incrementAsync.pending, (state) => {
        console.log("incrementAsync.pending", "state", state);
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload;
        }
      );
  },
});

/**
 * Async thunk - used in the above "extraReducers"... actually this is the "action" of the reducer.
 * ...Simulated delay, like an API call or a network request, then just return the amount.
 *
 * In contrast of createSlice() here are few differences:
 * - We need to define a name, in the above case ReduxToolkit automatically do this for us.
 * - Here we need to define the action 1st. Then use it within the "extraReducers" above.
 * - Also here we are exporting the action, so it can be used in other places.
 *   And the "extraReducers" waiting for it...
 */
export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
