import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

type Props = {};

const SharedNav = (props: Props) => {
  return (
    <>
      <NavBar />
      <div className="app-content">
        <Outlet />
      </div>
    </>
  );
};

export default SharedNav;
