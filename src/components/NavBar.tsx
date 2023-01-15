import React, { useContext } from "react";
import { ThemeContext } from "../providers/ThemeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ALL_PATHS, NAV_BAR_PATHS } from "../utils/route_paths";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const theme = useContext(ThemeContext);
  const location = useLocation();

  return (
    <nav className="p-2 bg-gray-800 text-gray-300">
      <div className="app-content mt-0.5 flex items-center justify-between gap-2 bg-red-500/0">
        <p className="text-2xl">Fuschia todos</p>
        <ul className="hidden md:flex gap-2.5 title-medium transition-all">
          {Object.entries(NAV_BAR_PATHS).map(([key, value]) => {
            return (
              <li
                key={key}
                className={
                  location.pathname === value.path
                    ? "bg-indigo-800 rounded-full px-2 py-1 cursor-pointer transition-colors duration-500"
                    : "hover:bg-indigo-800 rounded-full px-2 py-1 cursor-pointer transition-colors duration-500"
                }
                onClick={(_) =>
                  console.log(`Current location is...${location.pathname}`)
                }
              >
                {value.name}
              </li>
            );
          })}
        </ul>
        <button
          className="btn-primary"
          onClick={() => theme.setIsDark(!theme.isDark)}
        >
          <div className="flex items-center gap-1.5 md:px-2 bg-gray-300 text-gray-800 px-3 py-2 rounded">
            <div className="bg-red-500/0 flex items-center mb-0.5">
              {theme.isDark ? <MdLightMode /> : <MdDarkMode />}
            </div>
            <p className="hidden md:block">
              {theme.isDark ? "Light" : "Dark"} Mode
            </p>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
