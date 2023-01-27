import React, { useContext } from "react";
import { Todo } from "../utils/todo";
import FilterBar from "./FilterBar";
import { FilterTodos, SortTodos } from "../utils/sort_filter_todos";
import CollapsablePartialList from "./CollapsablePartialList";
import { useTodoStore } from "../stores/TodoStore";

type Props = {};

const TodoList: React.FC<Props> = () => {
  const todoLists = useTodoStore((state) => state.todoLists);

  return (
    <div className="mx-auto max-w-lg flex flex-col gap-2">
      {todoLists.map((todos) => (
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
