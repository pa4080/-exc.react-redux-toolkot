import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";

export const store = configureStore({
  reducer: {
    /**
     * Connect the "counterSlice" to the "store",
     * Which comes to be accessible for the entire application
     * via the "<Provider store={store} />" component in "main.tsx"
     */
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
