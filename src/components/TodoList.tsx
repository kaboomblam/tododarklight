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
      {todoContent.lists.map((todo) => (
        <CollapsablePartialList
          key={todo.id}
          todos={todo.comprisedOf}
          name={todo.name}
        />
      ))}
      {/* <CollapsablePartialList todos={pinnedTodoItems} name="Pinned" /> */}
      {/* <CollapsablePartialList todos={unpinnedTodoItems} name="Notes" /> */}
      <p>No more in lists</p>
    </div>
  );
};

export default TodoList;
