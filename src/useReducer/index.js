import React, { useReducer } from "react";
/**
 * 类似redux
 * const [state, dispatch] = useReducer(reducer, initialArg, init); // reducer 初始值 初始值函数
 */
const initialCount = 0;
function init(initialCount) {
  return { count: initialCount };
}

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload);
    default:
      throw new Error();
  }
};
const UseReducerCom = () => {
  const [state, dispatch] = useReducer(reducer, initialCount, init);

  return (
    <div>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        重置
      </button>
      <button onClick={() => dispatch({ type: "increment" })}>增</button>
      <button onClick={() => dispatch({ type: "decrement" })}>减</button>
    </div>
  );
};
export default UseReducerCom;
