import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AppDispatch, RootState } from "./state/store";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from "./state/counter/counterSlice";

const Counter: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="counter-container">
      <h2>
        Count is <b>{count}</b>
      </h2>

      <div className="button-container">
        <div className="button-row">
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
        <div className="button-row">
          <input id="amount" type="number" ref={inputRef} defaultValue={10} />
        </div>
        <div className="button-row">
          <button
            onClick={() =>
              dispatch(incrementByAmount(inputRef.current?.valueAsNumber || 0))
            }
          >
            Increment by amount
          </button>
          <button
            onClick={() =>
              dispatch(incrementAsync(inputRef.current?.valueAsNumber || 0))
            }
          >
            Increment by amount Async
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
