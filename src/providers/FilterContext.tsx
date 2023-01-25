import React, { createContext } from "react";
import { ImCalendar, ImFlag, ImList } from "react-icons/im";
import { TodoList } from "../utils/todo_list";

type Props = { children: JSX.Element };

type ContextProps = {
  filters: FilterOption[];
  lists: TodoList[];
};

type FilterOption = {
  icon: JSX.Element;
  name: string;
  values: string[];
};

const FilterContext = createContext<ContextProps>({
  filters: [],
  lists: [],
});

const FilterProvider: React.FC<Props> = (props: Props) => {
  const filterOptions: FilterOption[] = [
    {
      icon: <ImFlag className="bg-red-500/0" />,
      name: "priority",
      values: ["All", "P0", "P1", "P2", "P3", "P4", "P5"],
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
      values: [
        "A-Z",
        "Z-A",
        "Latest",
        "Oldest",
        "High Priority",
        "Low Priority",
      ],
    },
  ];

  return (
    <FilterContext.Provider
      value={{
        filters: filterOptions,
        lists: [],
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export { FilterProvider, FilterContext };
