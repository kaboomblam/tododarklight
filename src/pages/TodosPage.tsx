import React from "react";
import TodoList from "../components/TodoList";
import { useBearStore, useTodoStore } from "../stores/TodoStore";

type Props = {};

const TodoPage = (props: Props) => {
  const { bears, increasePopulation } = useBearStore((state) => {
    return { bears: state.bears, increasePopulation: state.increasePopulation };
  });

  const { todos, filters } = useTodoStore((state) => {
    return { todos: state.todoLists, filters: state.filters };
  });

  return (
    <>
      {/* <p>{bears}</p>
      <button onClick={increasePopulation} className="bg-blue-500 p-1 rounded">
        Increase
      </button> */}
      <div className="p-1.5 bg-cyan-500 mb-1 rounded">
        <p className="text-white text-center">Filters: {filters.length}</p>
        <ul>
          {filters.map((filter) => {
            return (
              <li key={filter.name} className="list-inside list-disc">
                {filter.name.toUpperCase()}, Current:{" "}
                {filter.values[filter.currentValue]}, Values:{" "}
                {filter.values.map((value) => {
                  return <span key={value}>{value}, </span>;
                })}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="p-1.5 bg-cyan-500 mb-1 rounded">
        <p className="text-white text-center">TodoLists: {todos.length}</p>
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id} className="list-inside list-disc">
                {todo.name} - {todo.comprisedOf.length} Todos
              </li>
            );
          })}
        </ul>
      </div>
      <TodoList />
    </>
  );
};

export default TodoPage;
