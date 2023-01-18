import React from "react";
import { Todo } from "../utils/todo";
import TodoListCardItem from "./TodoListCardItem";
import FilterBar from "./FilterBar";

type Props = {
  todos: Todo[];
};

const TodoList: React.FC<Props> = ({ todos }) => {
  const sortAlphabeticallyAscending = function (a: Todo, b: Todo) {
    if (a.todoItem.title < b.todoItem.title) {
      return -1;
    }
    if (a.todoItem.title > b.todoItem.title) {
      return 1;
    }
    return 0;
  };

  const sortAlphabeticallyDescending = function (a: Todo, b: Todo) {
    if (a.todoItem.title < b.todoItem.title) {
      return 1;
    }
    if (a.todoItem.title > b.todoItem.title) {
      return -1;
    }
    return 0;
  };

  const sortCreatedDateAscending = (a: Todo, b: Todo) =>
    a.todoItem.created.getTime() - b.todoItem.created.getTime();

  const sortCreatedDateDescending = (a: Todo, b: Todo) =>
    b.todoItem.created.getTime() - a.todoItem.created.getTime();

  // TODO: Fix this sort function by filtering out due dates into a new array, sorting that array, then mapping the sorted array back to the original array
  const sortDueDateAscending = (a: Todo, b: Todo) =>
    a.todoItem.due && b.todoItem.due
      ? a.todoItem.due.getTime() - b.todoItem.due.getTime()
      : 0;

  const sortDueDateDescending = (a: Todo, b: Todo) =>
    a.todoItem.due && b.todoItem.due
      ? b.todoItem.due.getTime() - a.todoItem.due.getTime()
      : 0;

  const sortedTodoItems = todos.sort(sortDueDateAscending);

  console.log(sortedTodoItems);

  return (
    <div className="mx-auto max-w-lg flex flex-col gap-2">
      <FilterBar />
      {sortedTodoItems.map((listItem) => {
        return (
          <TodoListCardItem key={listItem.todoItem.id} todoItem={listItem} />
        );
      })}
    </div>
  );
};

export default TodoList;
