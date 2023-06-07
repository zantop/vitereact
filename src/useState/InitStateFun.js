import React, { useState } from "react";
/**
 * 设置初始值为函数
 */
const InitStateFunCom = (props) => {
  const [func, setFunc] = useState(() => {
    return props.val > 100 ? 1 : 0;
  });
  return (
    <div>
      <button onClick={() => setFunc(func + 1)}>初始值函数返回{func}</button>
    </div>
  );
};
export default InitStateFunCom;
