import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  isDark: false,
  setIsDark: (isDark: boolean) => {},
});

export const ThemeProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    isDark
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
