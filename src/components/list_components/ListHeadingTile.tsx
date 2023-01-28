import React from "react";

type Props = {
  label: string;
  listSize: number;
  color: string;
};

const ListHeadingTile = (props: Props) => {
  return (
    <div className="flex items-center text-base font-bold rounded bg-gray-400 dark:bg-gray-300/30 max-w-max">
      <p className="text-gray-600 dark:text-inherit px-3 py-0.5 rounded-sm bg-red-500/0">
        {props.label}
      </p>
      <p
        className={`${props.color} text-gray-800/80 dark:text-inherit p-1 px-2 rounded-sm`}
      >
        {props.listSize}
      </p>
    </div>
  );
};

export default ListHeadingTile;
