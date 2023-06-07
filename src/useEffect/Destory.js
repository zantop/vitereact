import React, { useEffect, useState } from "react";

/**
 * 首先执行 useEffect return
 * 再执行 开始监听
 */
const DestoryCom = () => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log("开始监听");
    const Timer = setInterval(() => {
      console.log(num);
    }, 2000);
    return () => {
      console.log("取消监听");
      clearInterval(Timer);
    };
  });
  return <button onClick={() => setNum(num + 1)}>destory点击{num}</button>;
};

export default DestoryCom;
