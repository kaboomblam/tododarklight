import React from "react";
import { Todo } from "../utils/todo";
import TodoListCardItem from "./TodoListCardItem";
import FilterBar from "./FilterBar";
import { SortTodos } from "../utils/filter_todos";

type Props = {
  todos: Todo[];
};

const TodoList: React.FC<Props> = ({ todos }) => {
  const sortedTodoItems = todos.sort(SortTodos.sortAlphabeticallyAscending);

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
