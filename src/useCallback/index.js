import React, { useState, useCallback, useMemo } from "react";

/**
 * 缓存数据减少不必要的渲染
 * useCallback(fn, deps) 相当于 useMemo(() => fn, deps)
 */
import MemoAllCom from "./Memo";
import MemoAllPropsCom from "./MemoProps";
import CallBackCom from "./CallBack";
import UseMemoCom from "./UseMemo";

const UseCallbackCom = () => {
  /**
   * useMemo
   */
  // const userInfo = { name: "小明", age: 18 };

  return (
    <div>
      {/* <button onClick={handleAdd}>点击{count}</button> */}
      <MemoAllCom />
      <MemoAllPropsCom />
      <CallBackCom />
      <UseMemoCom />
    </div>
  );
};
export default UseCallbackCom;

// https://juejin.cn/post/7039256825656524807
