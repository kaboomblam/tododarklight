import React, { createContext, useEffect, useState } from "react";
import { ImCalendar, ImFlag, ImList } from "react-icons/im";
import { TodoList } from "../utils/todo_list";
import { Todo } from "../utils/todo";
import { generateRandomTodo } from "../utils/generate_random_todos";

type Props = { children: JSX.Element };

type FilterOption = {
  icon: JSX.Element;
  name: string;
  values: string[];
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

  const [content, setContent] = useState<ContextProps>({
    filters: filterOptions,
    lists: [
      {
        id: 1234,
        name: "My Todo List",
        comprisedOf: Array.from({ length: 2 }).map(() => generateRandomTodo()),
      },
      {
        id: 1235,
        name: "My Todo List 2",
        comprisedOf: Array.from({ length: 10 }).map(() => generateRandomTodo()),
      },
    ],
  });

  // useEffect(() => {
  //   setContent({...content, lists: [

  //   ]})
  // }, [content]);

  // let pinnedTodoItems = todos
  // .filter(FilterTodos.filterPinned)
  // .sort(SortTodos.sortAlphabeticallyAscending);

  return (
    <TodoContext.Provider value={content}>
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
