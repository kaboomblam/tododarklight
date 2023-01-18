import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

type Props = {};

const SharedNavPage = (props: Props) => {
  return (
    <>
      <NavBar />
      <div className="app-content pt-5 px-2">
        <Outlet />
      </div>
    </>
  );
};

export default SharedNavPage;
