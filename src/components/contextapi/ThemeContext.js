import React from "react";

export const ThemeContext = React.createContext({
  darkMode: false,
  TtoggleDarkMode: () => {},
});
