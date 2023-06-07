import React, { Component, useContext } from "react";
import { ThemeContext } from "./context";
// usecontext
/**
 * 当组件上层最近的<MyContext.Provider>更新时，
 * 该Hook会触发重新渲染，并使用最新传递给MyContext Provider的context value值。
 * 即使祖先使用 React.memo 或 shouldComponentUpdate，
 * 也会在组件本身使用 useContext 时重新渲染。
 */
const UseContextCom = () => {
  const context = useContext(ThemeContext);
  console.log("useContext消费数据", context);
  return <button style={context}>useContext 按钮</button>;
};
// consumer
const ConsumerCom = () => {
  const { Consumer } = ThemeContext;
  return (
    <Consumer>
      {(props) => {
        console.log("Consumer消费数据", props);
        return <button style={props}>Consumer 按钮</button>;
      }}
    </Consumer>
  );
};
// class组件
class ClassCom extends Component {
  // 将 context 直接赋值于 contextType
  static contextType = ThemeContext;
  render() {
    // class组件中直接使用访问 this.context 获取共享变量
    const theme = this.context;
    console.log("class组件消费数据", theme);
    return <button style={theme}>contextType 按钮</button>;
  }
}
const ButtonCom = () => {
  return (
    <div>
      <UseContextCom />
      <ConsumerCom />
      <ClassCom />
    </div>
  );
};

export default ButtonCom;
