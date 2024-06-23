import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AppDispatch, RootState } from "./state/store";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  setAmount,
} from "./state/counter/counterSlice";

const Counter: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const storedCount = Number(
      JSON.parse(localStorage.getItem("count") || "0")
    );

    if (storedCount && !isNaN(storedCount) && count !== storedCount)
      dispatch(setAmount(storedCount));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  useEffect(() => {
    console.log(count);
  });

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
        <div className="button-row">
          <button
            onClick={() => dispatch(setAmount(0))}
            className="reset-button"
          >
            Reset the local storage count
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
