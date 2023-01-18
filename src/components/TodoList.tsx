import React from "react";
import { Todo } from "../utils/todo";
import TodoListCardItem from "./TodoListCardItem";
import FilterBar from "./FilterBar";
import { FilterTodos, SortTodos } from "../utils/filter_todos";

type Props = {
  todos: Todo[];
};

const TodoList: React.FC<Props> = ({ todos }) => {
  let sortedTodoItems = todos.sort(SortTodos.sortAlphabeticallyAscending);
  let pinnedTodoItems = sortedTodoItems.filter(FilterTodos.filterPinned);
  let unpinnedTodoItems = sortedTodoItems.filter(FilterTodos.filterUnpinned);

  console.log(sortedTodoItems);

  return (
    <div className="mx-auto max-w-lg flex flex-col gap-2">
      <FilterBar />
      <div className="flex items-center mb-1 text-base font-bold rounded bg-gray-400 dark:bg-gray-300/30 max-w-min">
        <p className="text-gray-600 dark:text-inherit px-3 py-0.5 rounded-sm bg-red-500/0">
          Pinned
        </p>
        <p className="bg-indigo-500/80 p-1 px-2 rounded-sm">
          {pinnedTodoItems.length}
        </p>
      </div>
      {pinnedTodoItems.map((listItem) => {
        return (
          <TodoListCardItem key={listItem.todoItem.id} todoItem={listItem} />
        );
      })}
      <div className="p-0.5 bg-stone-400 my-2 mx-1.5 rounded-sm opacity-70" />
      {unpinnedTodoItems.map((listItem) => {
        return (
          <TodoListCardItem key={listItem.todoItem.id} todoItem={listItem} />
        );
      })}
    </div>
  );
};

export default TodoList;
