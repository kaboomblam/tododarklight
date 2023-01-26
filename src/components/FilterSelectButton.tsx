import React from "react";

type Props = {
  options: string[];
  currentValue: number;
};

const FilterSelectButton = (props: Props) => {
  return (
    <>
      <select
        className="py-1 px-1.5 font-bold bg-indigo-300 dark:bg-indigo-300/50 text-indigo-600/90 dark:text-inherit rounded-full outline-none"
        onChange={(elem) => console.log("We clicked", elem.target.value)}
        value={props.options[props.currentValue]}
      >
        {props.options.map((option) => {
          return (
            <option
              key={option}
              value={option}
              className="bg-stone-200 text-black"
            >
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default FilterSelectButton;
