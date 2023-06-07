import React, { useEffect, useState } from "react";

/**
 *  参数2 首次执行一次 componentDidMount
 *  参数2 不传 componentDidUpdate 每次更新都会渲染
 *  参数2 return的时候 componentWillUnmount
 */
const LiefCycleCom = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setList(data));
    return () => {};
  });
  return (
    <ol>
      {list.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ol>
  );
};

export default LiefCycleCom;
