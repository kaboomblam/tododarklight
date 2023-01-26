import React from "react";
import NavBar from "../components/NavBar";
import TodoList from "../components/TodoList";
import { STARTING_TODOS } from "../utils/generate_random_todos";
import useBearStore from "../stores/TodoStore";

type Props = {};

function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <p className="my-1 p-1 text-center bg-red-500">{bears}</p>;
}

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return (
    <button onClick={increasePopulation} className="bg-blue-300 p-1 rounded">
      one up
    </button>
  );
}

const TodoPage = (props: Props) => {
  const todos = STARTING_TODOS;
  return (
    <>
      {BearCounter()}
      {Controls()}
      <TodoList todos={todos} />
    </>
  );
};

export default TodoPage;
