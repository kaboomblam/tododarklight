import React, { useContext } from "react";
import { ThemeContext } from "../providers/ThemeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const NavBar = () => {
  const theme = useContext(ThemeContext);

  return (
    <nav className="p-1 on-surface surface-text">
      <div className="mx-auto md:container flex items-center justify-between gap-2 bg-red-500/0">
        <p className="headline-small">Fuschia todos</p>
        <ul className="hidden md:flex gap-2.5 title-medium transition-all">
          <li>TODOS</li>
          <li>Deleted</li>
          <li>Completed</li>
          <li>About App</li>
        </ul>
        <button
          className="btn-primary"
          onClick={() => theme.setIsDark(!theme.isDark)}
        >
          <p className="flex items-center gap-1.5 md:px-1.5 title-small">
            <div className="bg-red-500/0 flex items-center mb-0.5">
              {theme.isDark ? <MdLightMode /> : <MdDarkMode />}
            </div>
            <div className="hidden md:block">
              {theme.isDark ? "Light" : "Dark"} Mode
            </div>
          </p>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
