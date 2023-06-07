import React, { memo, useState } from "react";

/**
 * Part-1
 * 子组件的 props 和 state 没有变化，但是父组件state更新导致子组件重新渲染。
 * 使用memo包裹返回新组件，不传props组件，不会重新渲染。
 */
const Com = () => {
  console.log("Com子组件渲染了");
  return <div>com子组件</div>;
};
const MemoCom = memo(() => {
  console.log("MemoCom子组件渲染了");
  return <div>memocom子组件</div>;
});
const MemoAllCom = () => {
  const [count, setCount] = useState(1);
  const handleAdd = () => setCount(count + 1);
  return (
    <>
      <h3 className="flex">memo</h3>
      <button onClick={handleAdd}>点击{count}</button>
      <div className="flex">
        <Com />
        <MemoCom />
      </div>
      <hr />
    </>
  );
};
export default MemoAllCom;
