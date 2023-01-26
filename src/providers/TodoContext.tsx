import React, { createContext, useEffect, useState } from "react";
import { ImCalendar, ImFlag, ImList } from "react-icons/im";
import { TodoList, TodoListParams, defaultTodoLists } from "../utils/todo_list";
import { Todo } from "../utils/todo";
import { generateRandomTodo } from "../utils/generate_random_todos";
import { FilterTodos, SortTodos } from "../utils/sort_filter_todos";
import {
  FilterOption,
  dueDateFilters,
  priorityFilters,
  sortFilters,
} from "../utils/filters";
import { filterList } from "../utils/filter_list";

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
  const filters: FilterOption[] = filterList;

  const [content, setContent] = useState<ContextProps>({
    filters,
    lists: defaultTodoLists,
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
