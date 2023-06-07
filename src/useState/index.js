import React from "react";
/**
 * 1、初始值 const {state,setState} = useState(initState)
 *    可是简单类型、引用类型、也可是函数
 *    初始值是惰性的，初始渲染中起作用、后续渲染被忽略
 * 2、两种方式 setState(state+1) state(()=>state+1)
 * 3、初始值为引用类型 state(()=>{...state,//其他属性})
 * 4、state变化组件重新渲染，不变不会重新渲染
 */
import InitStateCom from "./InitState";
import InitStateObjCom from "./InitStateObj";
import InitStateFunCom from "./InitStateFun";
import RenderCom from "./Render";

const useStateCom = () => {
  console.clear();
  return (
    <ol>
      <li>
        <InitStateCom />
      </li>
      <li>
        <InitStateObjCom />
      </li>
      <li>
        <InitStateFunCom val={10} />
      </li>
      <li>
        <RenderCom />
      </li>
    </ol>
  );
};
export default useStateCom;
