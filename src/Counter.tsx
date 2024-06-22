import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "./state/store";
import { decrement, increment } from "./state/counter/counterSlice";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h2>
        Count is <b>{count}</b>
      </h2>
      <div className="button-container">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
