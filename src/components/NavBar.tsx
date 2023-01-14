import React, { useContext } from "react";
import { ThemeContext } from "../providers/ThemeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const NavBar = () => {
  const theme = useContext(ThemeContext);

  return (
    <nav className="p-1 on-surface surface-text">
      <div className="mx-auto md:container flex items-center justify-between gap-2 bg-red-500/0">
        <p className="headline-small">Fuschia todos</p>
        <ul className="flex gap-2.5 title-medium bg-green-500/0">
          <li>TODOS</li>
          <li>Deleted</li>
          <li>Completed</li>
          <li>About App</li>
        </ul>
        <button
          className="btn-primary"
          onClick={() => theme.setIsDark(!theme.isDark)}
        >
          <p className="flex items-center">
            Toggle {theme.isDark ? "Light" : "Dark"} Mode{" "}
            {theme.isDark ? <MdLightMode /> : <MdDarkMode />}
          </p>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
