import "./styles.css";
import UseStateCom from "./useState";
import Intro from "./intro";
import UseRefCom from "./useref";
import UseEffectCom from "./useEffect";
import UseContextCom from "./useContext";
import UseReducerCom from "./useReducer";
import UseCallbackCom from "./useCallback";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <h2>Start React hooks !</h2>
      <BrowserRouter>
        <nav className="flex">
          <NavLink to="/">intro</NavLink>
          <NavLink to="/useState">useState</NavLink>
          <NavLink to="/useEffect">useEffect</NavLink>
          <NavLink to="/useContext">useContext</NavLink>
          <NavLink to="/useReducer">useReducer</NavLink>
          <NavLink to="/useCallback">useCallback</NavLink>
          <NavLink to="/useRef">useRef</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/useState" element={<UseStateCom />} />
          <Route path="/useRef" element={<UseRefCom />} />
          <Route path="/useEffect" element={<UseEffectCom />} />
          <Route path="/useReducer" element={<UseReducerCom />} />
          <Route path="/useCallback" element={<UseCallbackCom />} />
          <Route path="/useContext" element={<UseContextCom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
