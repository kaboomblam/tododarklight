import React from "react";
import TodoList from "../components/TodoList";
import { useBearStore, useTodoStore } from "../stores/TodoStore";

type Props = {};

const TodoPage = (props: Props) => {
  const { bears, increasePopulation } = useBearStore((state) => {
    return { bears: state.bears, increasePopulation: state.increasePopulation };
  });

  const { todos: todoLists, filters } = useTodoStore((state) => {
    return { todos: state.todoLists, filters: state.filters };
  });

  return (
    <>
      {/* Filters */}
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
      {/* TodoLists */}
      <div className="p-1.5 bg-cyan-500 mb-1 rounded">
        <p className="text-white text-center">TodoLists: {todoLists.length}</p>
        <ul>
          {todoLists.map((todoList) => {
            return (
              <li key={todoList.id} className="list-inside list-disc">
                {todoList.name} - {todoList.comprisedOf.length} Todos.
                <hr />
                {/* Todos */}
                <ul className="indent-5">
                  {todoList.comprisedOf.map((todo) => {
                    return (
                      <li
                        key={todo.todoItem.id}
                        className="list-inside list-disc"
                      >
                        {todo.todoItem.title} -{" "}
                        {todo.todoItem.ownerList?.length} Tag(s)
                      </li>
                    );
                  })}
                </ul>
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
