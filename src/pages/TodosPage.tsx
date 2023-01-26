import React from "react";
import TodoList from "../components/TodoList";
import useBearStore from "../stores/TodoStore";

type Props = {};

const TodoPage = (props: Props) => {
  const { bears, increasePopulation } = useBearStore((state) => {
    return { bears: state.bears, increasePopulation: state.increasePopulation };
  });

  return (
    <>
      <p>{bears}</p>
      <button onClick={increasePopulation} className="bg-blue-500 p-1 rounded">
        Increase
      </button>
      <TodoList />
    </>
  );
};

export default TodoPage;
