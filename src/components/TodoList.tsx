import React from "react";
import { Todo } from "../utils/todo";
import TodoListCardItem from "./TodoListCardItem";
import FilterBar from "./FilterBar";
import { FilterTodos, SortTodos } from "../utils/sort_filter_todos";
import ListHeadingTile from "./ListHeadingTile";
import { BsArrowsCollapse } from "react-icons/bs";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { GrFormViewHide } from "react-icons/gr";
import { AiOutlineColumnHeight } from "react-icons/ai";

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
          <button className="bg-violet-300/70 dark:bg-gray-500/30 text-indigo-600/90 dark:text-gray-200/80 text-lg rounded-full px-3.5 py-1">
            <AiOutlineColumnHeight />
          </button>
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
