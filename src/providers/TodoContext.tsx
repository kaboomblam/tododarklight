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
  currentValue: string;
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
  // TODO: Fix current value logic to reflect in select
  const filterOptions: FilterOption[] = [
    {
      name: "priority",
      icon: <ImFlag className="bg-red-500/0" />,
      values: ["All", "P0", "P1", "P2", "P3", "P4", "P5"],
      currentValue: "All",
    },
    {
      name: "dueDate",
      icon: <ImCalendar className="bg-red-500/0" />,
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
      currentValue: "All",
    },
    {
      name: "sort",
      icon: <ImList className="bg-red-500/0" />,
      values: [
        "A-Z",
        "Z-A",
        "Latest",
        "Oldest",
        "High Priority",
        "Low Priority",
      ],
      currentValue: "A-Z",
    },
  ];

  const placeholderRandomList = Array.from({ length: 20 }).map(() =>
    generateRandomTodo(),
  );

  const [content, setContent] = useState<ContextProps>({
    filters: filterOptions,
    lists: [
      {
        id: 1234,
        name: "Pinned",
        comprisedOf: [],
      },
      {
        id: 1235,
        name: "Todos",
        comprisedOf: [],
      },
    ],
  });

  return (
    <TodoContext.Provider value={content}>
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
