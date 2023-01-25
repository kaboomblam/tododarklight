import React from "react";
import NavBar from "../components/NavBar";
import TodoList from "../components/TodoList";
import { STARTING_TODOS } from "../utils/generate_random_todos";

type Props = {};

const TodoPage = (props: Props) => {
  const todos = STARTING_TODOS;
  return (
    <>
      <TodoList todos={todos} />
    </>
  );
};

export default TodoPage;
