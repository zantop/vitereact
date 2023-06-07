import React from "react";

const Index = () => {
  return (
    <ol className="flex-start">
      <li>只能在函数组件中使用，不能在classs组建中使用</li>
      <li>不能在循环、条件判断或者子函数中使用</li>
    </ol>
  );
};
export default Index;
