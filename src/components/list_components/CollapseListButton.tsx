import React from "react";
import { AiOutlineColumnHeight } from "react-icons/ai";

type Props = {
  onClick: () => void;
  isCollapsed: boolean;
};

const CollapseListButton = (props: Props) => {
  return (
    <button
      className="bg-violet-300/70 dark:bg-gray-500/30 text-indigo-600/90 dark:text-gray-200/80 text-lg rounded-full px-3.5 py-1"
      onClick={props.onClick}
    >
      <AiOutlineColumnHeight
        color={`${props.isCollapsed ? "indianred" : "aliceblue"}`}
      />
    </button>
  );
};

export default CollapseListButton;
