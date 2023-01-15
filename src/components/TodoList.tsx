import React from "react";
import { Todo } from "../utils/todo";
import TodoListCardItem from "./TodoListCardItem";

type Props = {
  todos: Todo[];
};

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <div className="mx-auto max-w-lg flex flex-col gap-2">
      {todos.map((listItem) => {
        return <TodoListCardItem todoItem={listItem} />;
      })}
    </div>
  );
};

export default TodoList;
