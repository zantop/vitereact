import React, { useState, useEffect, useRef } from "react";
/**
 * 1.获取DOM节点
 * 2.存储变量
 */
const useRefCom = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });
  const handleClick = () => {
    inputRef.current.value = "Hello Hooks";
    console.log(inputRef); // 输出获取到的DOM节点
  };
  // 类似修改state值一样，输入内容的时候保存变量
  const [text, setText] = useState("Hello UseRef");
  const textRef = useRef();
  useEffect(() => {
    textRef.current = text;
    console.log("textRef.current:", textRef.current);
  }, [text]);
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>input里填充文字</button>
      <br />
      <br />
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
};
export default useRefCom;
