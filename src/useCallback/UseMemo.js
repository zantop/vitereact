import { memo, useState, useMemo } from "react";

/**
 * Part-4
 * useMemo()返回一个 memoized 值
 */
const Com = memo((props) => {
  const { userInfo } = props;
  console.log("UseMemo渲染了");
  return (
    <div className="flex">
      <div>UseMemo子组件</div>
      <button>
        我是：{userInfo.name} {userInfo.age}
      </button>
    </div>
  );
});

const UseMemoCom = () => {
  const [count, setCount] = useState(1);
  const handleAdd = () => setCount(count + 1);
  // const userInfo = { name: "小明", age: 18 };
  const userInfo = useMemo(() => ({ name: "小明", age: 18 }), []);
  return (
    <>
      <h3 className="flex">usememo</h3>
      <button onClick={handleAdd}>点击{count}</button>
      <Com userInfo={userInfo} />
      <hr />
    </>
  );
};

export default UseMemoCom;

/**
把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。
这种优化有助于避免在每次渲染时都进行高开销的计算。
记住，传入 useMemo 的函数会在渲染期间执行。请不要在这个函数内部执行与渲染无关的操作，
诸如副作用这类的操作属于 useEffect 的适用范畴，而不是 useMemo。
 */
