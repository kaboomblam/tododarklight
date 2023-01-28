import React, { useContext } from "react";
import { FilterOption } from "../../utils/filter_option";
import { useTodoStore } from "../../stores/todo_store";

type Props = {
  name: string;
  options: string[];
  currentValue: number;
};

const FilterSelectButton = (props: Props) => {
  // const todos = useContext(TodoContext);

  const [filterOptions, updateFilterOption] = useTodoStore((state) => [
    state.filterOptions,
    state.updateFilterOption,
  ]);

  function changeFilterOption(name: string, value: string) {
    let filterOptionChanged: FilterOption = filterOptions.filter(
      (filter) => filter.name === name,
    )[0];

    filterOptionChanged.currentValue = filterOptionChanged.values.findIndex(
      (filterValue) => filterValue === value,
    );

    updateFilterOption(filterOptionChanged);
  }

  return (
    <>
      <select
        className="py-1 px-1.5 font-bold bg-indigo-300 dark:bg-indigo-300/50 text-indigo-600/90 dark:text-inherit rounded-full outline-none"
        onChange={(elem) => changeFilterOption(props.name, elem.target.value)}
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
