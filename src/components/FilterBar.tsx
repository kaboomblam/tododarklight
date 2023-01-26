import React, { useContext } from "react";
import { TodoContext } from "../providers/TodoContext";
import FilterSelectButton from "./FilterSelectButton";

type Props = {};

const FilterBar = (props: Props) => {
  const todos = useContext(TodoContext);
  return (
    <div className="flex gap-3 bg-blue-300/50 rounded mb-1 p-2">
      {todos.filters.map((filterOption) => {
        return (
          <div
            key={filterOption.name}
            className="flex gap-1 last:flex-1 last:justify-end"
          >
            <p className="flex justify-end items-center text-indigo-600/70 dark:text-indigo-300/80 opacity-70">
              {filterOption.icon}
            </p>
            <FilterSelectButton
              name={filterOption.name}
              options={filterOption.values}
              currentValue={filterOption.currentValue}
            />
            {/* <select
              className="py-1 px-1.5 font-bold bg-indigo-300 dark:bg-indigo-300/50 text-indigo-600/90 dark:text-inherit rounded-full outline-none"
              onChange={(elem) => console.log("We clicked", elem.target.value)}
              value={filterOption.values[filterOption.currentValue]}
            >
              {filterOption.values.map((option) => {
                return (
                  <option
                    key={filterOption.name + option}
                    value={option}
                    className="bg-stone-200 text-black"
                  >
                    {option}
                  </option>
                );
              })}
            </select> */}
          </div>
        );
      })}
    </div>
  );
};

export default FilterBar;
