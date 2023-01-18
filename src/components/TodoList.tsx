import React from "react";
import { Todo } from "../utils/todo";
import TodoListCardItem from "./TodoListCardItem";
import FilterBar from "./FilterBar";
import { FilterTodos, SortTodos } from "../utils/sort_filter_todos";
import ListHeadingTile from "./ListHeadingTile";
import { BsArrowsCollapse } from "react-icons/bs";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { GrFormViewHide } from "react-icons/gr";
import CollapseListButton from "./CollapseListButton";

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

  console.log("pinnedTodoItems: ", pinnedTodoItems);

  return (
    <div className="mx-auto max-w-lg flex flex-col gap-2">
      <FilterBar />
      <div className="flex gap-2 mb-1 mt-3.5 items-center">
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
        <div className="flex-1 flex justify-end">
          <CollapseListButton />
        </div>
      </div>
      {pinnedTodoItems.map((listItem) => {
        return (
          <TodoListCardItem key={listItem.todoItem.id} todoItem={listItem} />
        );
      })}
      <div className="flex gap-2 mb-1 mt-3.5">
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
        <div className="flex-1 flex justify-end">
          <CollapseListButton />
        </div>
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
