import React, { useEffect, useState } from "react";
/**
 * 类似componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合
 * 1、参数1 副作用处理函数，参数2 监听的数据  类似vue的watch
 *  参数1 函数处理监听和销毁操作
 *   useEffect(() => {
       监听逻辑
      return 销毁监听
     }, [count]);
 *  参数2
 *  ① 不传 渲染组件都会执行副作用
 *  ② 空数组 只会初始时渲染一次
 *  ③ 具体值 指定值变化才会执行副作用
 * 
 */
import DestoryCom from "./Destory";
import LiefCycleCom from "./LifeCycle";

const useEffectCom = () => {
  console.clear();
  const [count, setCount] = useState(0);
  // 每次更新都会Effect
  useEffect(() => {
    console.log("更新了", count);
  }, [count]);
  const handleAdd = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleAdd}>点击{count}</button>
      <DestoryCom />
      <LiefCycleCom />
    </div>
  );
};
export default useEffectCom;
