import React, { createContext, useEffect, useState } from "react";
import { ImCalendar, ImFlag, ImList } from "react-icons/im";
import { TodoList } from "../utils/todo_list";
import { Todo } from "../utils/todo";
import { generateRandomTodo } from "../utils/generate_random_todos";
import { FilterTodos, SortTodos } from "../utils/sort_filter_todos";
import {
  FilterOption,
  dueDateFilters,
  priorityFilters,
  sortFilters,
} from "../utils/filters";

type Props = { children: JSX.Element };

type ContextProps = {
  filters: FilterOption[];
  lists: TodoList[];
};

const TodoContext = createContext<ContextProps>({
  filters: [],
  lists: [],
});

const TodoProvider: React.FC<Props> = (props: Props) => {
  const filters: FilterOption[] = [
    new FilterOption(
      "priority",
      <ImFlag className="bg-red-500/0" />,
      priorityFilters,
      0,
    ),
    new FilterOption(
      "dueDate",
      <ImCalendar className="bg-red-500/0" />,
      dueDateFilters,
      2,
    ),
    new FilterOption(
      "sort",
      <ImList className="bg-red-500/0" />,
      sortFilters,
      sortFilters.length - 1,
    ),
  ];

  function changeFilterValue(filterName: string, filterValue: string): void {
    const filterIndex = filters.findIndex(
      (filter) => filter.name === filterName,
    );
    const filterValueIndex = filters[filterIndex].values.findIndex(
      (value) => value === filterValue,
    );
    filters[filterIndex].currentValue = filterValueIndex;
  }

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
