import React from "react";
import { Todo } from "../utils/todo";
import TodoListCardItem from "./TodoListCardItem";
import FilterBar from "./FilterBar";
import { FilterTodos, SortTodos } from "../utils/filter_todos";
import ListHeadingTile from "./ListHeadingTile";

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
      <div className="flex gap-2">
        <ListHeadingTile
          label="Pinned"
          listSize={pinnedTodoItems.length}
          color="bg-indigo-500/80"
        />
        <ListHeadingTile
          label="Due"
          listSize={pinnedTodoItems.length}
          color="bg-red-600/70"
        />
      </div>
      {pinnedTodoItems.map((listItem) => {
        return (
          <TodoListCardItem key={listItem.todoItem.id} todoItem={listItem} />
        );
      })}
      <div className="flex gap-2">
        <ListHeadingTile
          label="Notes"
          listSize={unpinnedTodoItems.length}
          color="bg-indigo-500/80"
        />
        <ListHeadingTile
          label="Due"
          listSize={unpinnedTodoItems.length}
          color="bg-red-600/70"
        />
      </div>
      {unpinnedTodoItems.map((listItem) => {
        return (
          <TodoListCardItem key={listItem.todoItem.id} todoItem={listItem} />
        );
      })}
    </div>
  );
};

export default TodoList;
