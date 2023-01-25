import React, { useContext } from "react";
import { Todo } from "../utils/todo";
import FilterBar from "./FilterBar";
import { FilterTodos, SortTodos } from "../utils/sort_filter_todos";
import CollapsablePartialList from "./CollapsablePartialList";
import { TodoContext } from "../providers/TodoContext";

type Props = {
  todos: Todo[];
};

const TodoList: React.FC<Props> = ({ todos }) => {
  const todoContent = useContext(TodoContext);

  // let pinnedTodoItems = todos
  //   .filter(FilterTodos.filterPinned)
  //   .sort(SortTodos.sortAlphabeticallyAscending);
  // let unpinnedTodoItems = todos
  //   .filter(FilterTodos.filterUnpinned)
  //   .sort(SortTodos.sortAlphabeticallyAscending);

  return (
    <div className="mx-auto max-w-lg flex flex-col gap-2">
      <FilterBar />
      {todoContent.lists.map((todos) => (
        <CollapsablePartialList
          key={todos.id}
          todos={todos.comprisedOf}
          name={todos.name}
        />
      ))}
      <p className="mt-1 mb-2.5 text-gray-400 transition-none duration-75 dark:text-gray-600">
        No more lists
      </p>
    </div>
  );
};

export default TodoList;
