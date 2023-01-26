import React, { useContext } from "react";
import { TodoContext } from "../providers/TodoContext";
import FilterSelectButton from "./FilterSelectButton";
import { useTodoStore } from "../stores/TodoStore";

type Props = {};

const FilterBar = (props: Props) => {
  const filters = useTodoStore((state) => state.filterOptions);

  return (
    <div className="flex gap-3 bg-blue-300/50 rounded mb-1 p-2">
      {filters.map((filterOption) => {
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
          </div>
        );
      })}
    </div>
  );
};

export default FilterBar;
