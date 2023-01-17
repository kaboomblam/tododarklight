import React from "react";
import { Todo } from "../utils/todo";
import TodoListCardItem from "./TodoListCardItem";
import { AiFillCalendar, AiFillFlag } from "react-icons/ai";
import { FaListAlt } from "react-icons/fa";

type Props = {
  todos: Todo[];
};

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <div className="mx-auto max-w-lg flex flex-col gap-2">
      <div className="flex gap-1 bg-blue-300/50 rounded mb-1 p-2">
        <p className="flex justify-end items-center bg-blue-500/0">
          <AiFillFlag className="bg-red-500/0" />
        </p>
        <select className="font-bold bg-stone-300 text-stone-700 rounded ring-transparent outline-none">
          <option value="All" selected>
            All
          </option>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
          <option value="P3">P3</option>
        </select>
        <p className="ml-0.5 flex justify-end items-center bg-blue-500/0">
          <AiFillCalendar className="bg-red-500/0" />
        </p>
        <select className="font-bold bg-stone-300 text-stone-700 rounded outline-none">
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
          <option value="year-1">Overdue</option>
        </select>
        <p className="flex flex-1 justify-end items-center bg-blue-500/0">
          <FaListAlt className="bg-red-500/0" />
        </p>
        <select className="font-bold bg-stone-300 text-stone-700 rounded outline-none">
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
