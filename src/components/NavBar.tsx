import React from "react";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-center gap-2 p-1 on-surface surface-text">
      <p className="headline-small">Fuschia</p>
      <ul className="flex gap-1 title-medium">
        <li>TODOS</li>
        <li>Deleted</li>
        <li>Completed</li>
        <li>About</li>
      </ul>
      <button className="btn-primary">Toggle Light Mode</button>
    </nav>
  );
};

export default NavBar;
