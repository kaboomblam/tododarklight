import React from "react";
import { Todo } from "../utils/todo";
import TodoListItem from "./TodoListItem";

type Props = {
  todos: Todo[];
};

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <div className="flex flex-col gap-2">
      {todos.map((listItem) => {
        return <TodoListItem todoItem={listItem} />;
      })}
    </div>
  );
};

export default TodoList;
