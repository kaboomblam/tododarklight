import React from "react";
import { Todo } from "../utils/todo";
import FilterBar from "./FilterBar";
import { FilterTodos, SortTodos } from "../utils/sort_filter_todos";
import CollapsablePartialList from "./CollapsablePartialList";

type Props = {
  todos: Todo[];
};

const TodoList: React.FC<Props> = ({ todos }) => {
  let pinnedTodoItems = todos
    .filter(FilterTodos.filterPinned)
    .sort(SortTodos.sortAlphabeticallyAscending);
  let unpinnedTodoItems = todos
    .filter(FilterTodos.filterUnpinned)
    .sort(SortTodos.sortAlphabeticallyAscending);

  return (
    <div className="mx-auto max-w-lg flex flex-col gap-2">
      <FilterBar />
      <CollapsablePartialList todos={pinnedTodoItems} name="Pinned" />
      <CollapsablePartialList todos={unpinnedTodoItems} name="UnPinned" />
      <p>No more in lists</p>
    </div>
  );
};

export default TodoList;
