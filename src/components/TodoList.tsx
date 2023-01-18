import React from "react";
import { Todo } from "../utils/todo";
import TodoListCardItem from "./TodoListCardItem";
import FilterBar from "./FilterBar";

type Props = {
  todos: Todo[];
};

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <div className="mx-auto max-w-lg flex flex-col gap-2">
      <FilterBar />
      {todos.map((listItem) => {
        return (
          <TodoListCardItem key={listItem.todoItem.id} todoItem={listItem} />
        );
      })}
    </div>
  );
};

export default TodoList;
