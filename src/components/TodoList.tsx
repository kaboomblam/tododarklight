import React from "react";
import { Todo } from "../utils/todo";
import TodoListCardItem from "./TodoListCardItem";
import { AiFillCalendar, AiFillFlag } from "react-icons/ai";
import { FaCalendarAlt, FaFlag, FaListAlt } from "react-icons/fa";
import { ImCalendar, ImFlag, ImList } from "react-icons/im";

type Props = {
  todos: Todo[];
};

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <div className="mx-auto max-w-lg flex flex-col gap-2">
      <div className="flex gap-1 bg-blue-300/50 rounded mb-1 p-2">
        <p className="flex justify-end items-center bg-blue-500/0 text-indigo-600/70 dark:text-indigo-300/80 opacity-70">
          <ImFlag className="bg-red-500/0" />
        </p>
        <select className="py-1 px-1.5 font-bold bg-indigo-300 dark:bg-indigo-300/50 text-violet-800/80 dark:text-inherit rounded-full outline-none">
          <option value="All" selected>
            All
          </option>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
          <option value="P3">P3</option>
        </select>
        <p className="ml-1.5 flex justify-end items-center bg-blue-500/0 text-indigo-600/70 dark:text-indigo-300/80 opacity-70">
          <ImCalendar className="bg-red-500/0" />
        </p>
        <select className="py-1 px-1.5 font-bold bg-indigo-300 dark:bg-indigo-300/50 text-violet-800/80 dark:text-inherit rounded-full outline-none">
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
        <p className="flex-1 flex justify-end items-center bg-blue-500/0 text-indigo-600/70 dark:text-indigo-300/80 opacity-70">
          <ImList className="bg-red-500/0" />
        </p>
        <select className="py-1 px-1.5 font-bold bg-indigo-300 dark:bg-indigo-300/50 text-violet-800/80 dark:text-inherit rounded-full outline-none">
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
