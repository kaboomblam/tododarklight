import React from "react";
import { useNavigate } from "react-router-dom";
import { ALL_PATHS } from "../utils/route_paths";

type Props = {};

const NotFoundPage = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2 mt-8">
      <h1 className="headline-small">404! Page not found.</h1>
      <p className="body-small">Sorry, we were unable to find this page.</p>
      <button
        className="btn-primary"
        onClick={() => navigate(ALL_PATHS.home.path)}
      >
        Return to home
      </button>
    </div>
  );
};

export default NotFoundPage;
