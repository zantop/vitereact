import React, { useState } from "react";
/**
 * 设置初始值
 */
const InitStateCom = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>点击{count}</button>
    </div>
  );
};

export default InitStateCom;
