import { memo, useState, useCallback } from "react";

/** Part-2
 把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的memoized回调函数，
 该回调函数仅在某个依赖项改变时才会更新。
 当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如 shouldComponentUpdate）的子组件时，
 它将非常有用。
 memoized回调函数: 使用一组参数初次调用函数时，缓存参数和计算结果，
 当再次使用相同的参数调用该函数时，直接返回相应的缓存结果。(返回对应饮用，所以恒等于 ===)
 */
const CallBackSonCom = memo((props) => {
  const { name, onClick } = props;
  console.log("callbackson渲染了");
  return (
    <div className="flex">
      <div>callbackson</div>
      <button onClick={() => onClick("小红")}>我是：{name}</button>
    </div>
  );
});
const CallBackCom = () => {
  const [count, setCount] = useState(1);
  const handleAdd = () => setCount(count + 1);
  const [name, setName] = useState("小明");
  // 使用callback 数组为重新渲染依赖项 点击handleAdd name没变化 组件不重新渲染
  const handleName = useCallback(() => {
    setName(name);
  }, [name]);

  // 点击handleAdd count变化 组件重新渲染
  const handleName1 = useCallback(() => {
    setName(name);
  }, [count]);
  return (
    <>
      <h3 className="flex">callback</h3>
      <button onClick={handleAdd}>点击{count}</button>
      <CallBackSonCom name={name} onClick={handleName} />
      <CallBackSonCom name={name} onClick={handleName1} />
      <hr />
    </>
  );
};

export default CallBackCom;
