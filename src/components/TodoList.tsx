import React from "react";
import { Todo } from "../utils/todo";
import TodoListCardItem from "./TodoListCardItem";

type Props = {
  todos: Todo[];
};

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <div className="mx-auto max-w-lg flex flex-col gap-2">
      <div className="flex gap-2 border-b border-gray-400 pb-2">
        <p>Priority:</p>{" "}
        <select className="bg-gray-300 text-gray-700 rounded">
          <option value="All" selected>
            All
          </option>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
          <option value="P3">P3</option>
        </select>
        <p>Due:</p>
        <select className="bg-gray-300 text-gray-700 rounded">
          <option value="All" selected>
            All
          </option>
          <option value="Today">Today</option>
          <option value="week-1">1 week</option>
          <option value="week-2">2 weeks</option>
          <option value="month-1">1 month</option>
          <option value="month-3">3 months</option>
          <option value="month-6">6 months</option>
          <option value="year-1">1 year</option>
        </select>
        <p className="flex-1 justify-end items-end text-right">Sort:</p>
        <select className="bg-gray-300 text-gray-700 rounded">
          <option value="All" selected>
            All
          </option>
          <option value="Today">A-Z</option>
          <option value="week-1">Z-A</option>
          <option value="week-2">Latest</option>
          <option value="month-1">Oldest</option>
          <option value="month-3">High Priority</option>
          <option value="month-6">Low Priority</option>
        </select>
      </div>
      {todos.map((listItem) => {
        return <TodoListCardItem todoItem={listItem} />;
      })}
    </div>
  );
};

export default TodoList;
