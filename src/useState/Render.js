import React, { useState } from "react";
/**
 * 数值一致不重新渲染
 */
const RenderCom = () => {
  const [count, setCount] = useState(0);
  console.log("SameRenderCom重新渲染");
  return <button onClick={() => setCount(count)}>是否重新渲染</button>;
};

export default RenderCom;
