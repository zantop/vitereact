import React, { useState } from "react";
import { themes, ThemeContext } from "./context";
import MiddleCom from "./Middle";
/**
 * 1、解决嵌套组件props层层传递,包含组件树共享数据
 * 2、createContext创建context
 * 3、useContext/Consumer/ContextType消费共享数据
 * 4、Context.displayName  DevTools 中将显示为 MyDisplayName
 */
const UseContextCom = () => {
  console.clear();
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <button
        onClick={() => setTheme(() => (theme === "light" ? "dark" : "light"))}
      >
        切换颜色
      </button>
      <ThemeContext.Provider value={themes[theme]}>
        <MiddleCom />
      </ThemeContext.Provider>
    </div>
  );
};
export default UseContextCom;

// https://ithelp.ithome.com.tw/articles/10252123
