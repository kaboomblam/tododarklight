import React, { createContext, useEffect, useState } from "react";
import { ImCalendar, ImFlag, ImList } from "react-icons/im";
import { TodoList } from "../utils/todo_list";
import { Todo } from "../utils/todo";
import { generateRandomTodo } from "../utils/generate_random_todos";
import { FilterTodos, SortTodos } from "../utils/sort_filter_todos";

type Props = { children: JSX.Element };

type FilterOption = {
  name: string;
  icon: JSX.Element;
  values: string[];
  currentValue: number;
};

type ContextProps = {
  filters: FilterOption[];
  lists: TodoList[];
};

const TodoContext = createContext<ContextProps>({
  filters: [],
  lists: [],
});

const TodoProvider: React.FC<Props> = (props: Props) => {
  // Todo filter categories

  const priorityFilters = ["All", "P0", "P1", "P2", "P3", "P4", "P5"];
  const dueDateFilters = [
    "All",
    "Today",
    "1 week",
    "2 weeks",
    "1 month",
    "3 month",
    "6 month",
    "1 year",
    "Overdue",
  ];
  const sortFilters = [
    "A-Z",
    "Z-A",
    "Latest",
    "Oldest",
    "High Priority",
    "Low Priority",
  ];

  // TODO: Fix current value logic to reflect in select
  const filters: FilterOption[] = [
    {
      name: "priority",
      icon: <ImFlag className="bg-red-500/0" />,
      values: priorityFilters,
      currentValue: 0,
    },
    {
      name: "dueDate",
      icon: <ImCalendar className="bg-red-500/0" />,
      values: dueDateFilters,
      currentValue: 2,
    },
    {
      name: "sort",
      icon: <ImList className="bg-red-500/0" />,
      values: sortFilters,
      currentValue: sortFilters.length - 1,
    },
  ];

  const placeholderRandomList = Array.from({ length: 20 }).map(() =>
    generateRandomTodo(),
  );

  const [content, setContent] = useState<ContextProps>({
    filters,
    lists: [
      {
        id: 1234,
        name: "Pinned",
        comprisedOf: placeholderRandomList
          .filter(FilterTodos.filterPinned)
          .sort(SortTodos.sortAlphabeticallyAscending),
      },
      {
        id: 1235,
        name: "Todos",
        comprisedOf: placeholderRandomList
          .filter(FilterTodos.filterUnpinned)
          .sort(SortTodos.sortAlphabeticallyAscending),
      },
    ],
  });

  useEffect(() => {
    console.log("Something changed in TodoContext content...");
  }, [content]);

  return (
    <TodoContext.Provider value={content}>
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
