import { memo, useState } from "react";

/** Part-2
 * 父组件点击count按钮 当前组件也会重新渲染
 * 点击父组件按钮，改变了父组件中 count 变量，进而导致父组件重新渲染；
 * 父组件重新渲染时，会重新创建 onClick 函数，即传给子组件的 onClick 属性发生了变化，导致子组件渲染；
 * 如果传给子组件的【props只有基本数据类型】将不会重新渲染。
 * 那么如何处理上面的情况呢，可使用callback
 */
const MemoPropsCom = memo((props) => {
  const { name, onClick } = props;
  console.log("props复杂类型渲染了");
  return (
    <div className="flex">
      <div>props复杂类型</div>
      <button onClick={() => onClick("小红")}>我是：{name}</button>
    </div>
  );
});
const MemoBasicPropsCom = memo((props) => {
  const { name } = props;
  console.log("props基本数据类型渲染了");
  return (
    <div className="flex">
      <div>props基本数据类型</div>
      <button>我是：{name}</button>
    </div>
  );
});
const MemoAllPropsCom = () => {
  const [count, setCount] = useState(1);
  const handleAdd = () => setCount(count + 1);
  const [name, setName] = useState("小明");
  /**
   * 点击 handleAdd 会重新创建 handleName 函数传递给onclick
   * 点击 handleAdd setName方法因为解构出来的是一个memoized函数，不会重新渲染
   */
  const handleName = (name) => setName(name);
  // 点击handleAdd 基本类型不会重新创建
  let basicName = "我系基本类型";

  return (
    <>
      <h3 className="flex">memoProps</h3>
      <button onClick={handleAdd}>点击{count}</button>
      <MemoPropsCom name={name} onClick={handleName} />
      <MemoPropsCom name={name} onClick={setName} />
      <MemoBasicPropsCom name={basicName} />
      <hr />
    </>
  );
};

export default MemoAllPropsCom;
