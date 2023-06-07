import { createContext } from "react";

export const themes = {
  light: {
    color: "#f63",
    background: "#fff",
    border: "1px solid #f63"
  },
  dark: {
    color: "#fff",
    background: "#000",
    border: "1px solid #000"
  }
};

export const ThemeContext = createContext(themes);
