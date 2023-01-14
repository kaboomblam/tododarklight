import React, { useContext } from "react";
import { ThemeContext } from "../providers/ThemeContext";

const NavBar = () => {
  const theme = useContext(ThemeContext);

  return (
    <nav className="flex items-center justify-center gap-2 p-1 on-surface surface-text">
      <p className="headline-small">Fuschia todos</p>
      <ul className="flex gap-1 title-medium">
        <li>TODOS</li>
        <li>Deleted</li>
        <li>Completed</li>
        <li>About</li>
      </ul>
      <button
        className="btn-primary"
        onClick={() => theme.setIsDark(!theme.isDark)}
      >
        Toggle Theme Mode
      </button>
    </nav>
  );
};

export default NavBar;
