import React from "react";
import { ImCalendar, ImFlag, ImList } from "react-icons/im";

type Props = {};

type FilterOption = {
  icon: JSX.Element;
  name: string;
  values: string[];
};

const filterOptions: FilterOption[] = [
  {
    icon: <ImFlag className="bg-red-500/0" />,
    name: "priority",
    values: ["All", "P0", "P1", "P2", "P3"],
  },
  {
    icon: <ImCalendar className="bg-red-500/0" />,
    name: "dueDate",
    values: [
      "All",
      "Today",
      "1 week",
      "2 weeks",
      "1 month",
      "3 month",
      "6 month",
      "1 year",
      "Overdue",
    ],
  },
  {
    icon: <ImList className="bg-red-500/0" />,
    name: "sort",
    values: ["A-Z", "Z-A", "Latest", "Oldest", "High Priority", "Low Priority"],
  },
];

const FilterBar = (props: Props) => {
  return (
    <div className="flex gap-3 bg-blue-300/50 rounded mb-1 p-2">
      {filterOptions.map((filterOption) => {
        return (
          <div
            key={filterOption.name}
            className="flex gap-1 last:bg-red-400/0 last:flex-1 last:justify-end"
          >
            <p className="flex justify-end items-center bg-blue-500/0 text-indigo-600/70 dark:text-indigo-300/80 opacity-70">
              {filterOption.icon}
            </p>
            <select className="py-1 px-1.5 font-bold bg-indigo-300 dark:bg-indigo-300/50 text-violet-800/80 dark:text-inherit rounded-full outline-none">
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
