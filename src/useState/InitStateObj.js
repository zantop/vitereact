import React, { useState } from "react";
/**
 * 初始值为引用类型
 */
const InitStateObjCom = () => {
  const [person, setPerson] = useState({
    age: 12,
    name: "小王子"
  });
  const handleName = () => {
    setPerson({ ...person, name: "小李子" });
    // 修改值异步的
    setTimeout(() => console.log("修改姓名" + person.name), 1000);
  };
  const handleAge = () => {
    setPerson(() => {
      return { ...person, age: person.age + 1 };
    });
  };
  return (
    <div className="flex">
      <button onClick={handleName}>修改姓名</button>
      <button onClick={handleAge}>增加年龄</button>
      <span>
        {person.name}-{person.age}
      </span>
    </div>
  );
};
export default InitStateObjCom;
