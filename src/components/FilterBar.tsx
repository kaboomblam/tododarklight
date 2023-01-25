import React, { useContext } from "react";
import { FilterContext } from "../providers/FilterContext";

type Props = {};

const FilterBar = (props: Props) => {
  const filterOptions = useContext(FilterContext);
  return (
    <div className="flex gap-3 bg-blue-300/50 rounded mb-1 p-2">
      {filterOptions.filters.map((filterOption) => {
        return (
          <div
            key={filterOption.name}
            className="flex gap-1 last:bg-red-400/0 last:flex-1 last:justify-end"
          >
            <p className="flex justify-end items-center bg-blue-500/0 text-indigo-600/70 dark:text-indigo-300/80 opacity-70">
              {filterOption.icon}
            </p>
            <select
              className="py-1 px-1.5 font-bold bg-indigo-300 dark:bg-indigo-300/50 text-indigo-600/90 dark:text-inherit rounded-full outline-none"
              onChange={(e) => console.log("We clicked", e.target.value)}
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
            </select>
          </div>
        );
      })}
    </div>
  );
};

export default FilterBar;
