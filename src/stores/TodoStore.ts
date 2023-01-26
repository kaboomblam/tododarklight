import React from "react";
import { create } from "zustand";
import { Todo } from "../utils/todo";
import { FilterOption } from "../utils/filters";
import { ImCalendar, ImFlag, ImList } from "react-icons/im";
import { filterOptionsList } from "../utils/filter_list";
import {
  TodoList,
  defaultTodoLists,
  defaultWithUserLists,
} from "../utils/todo_list";

interface BearState {
  bears: number;
  increase: (by: number) => void;
  increasePopulation: () => void;
}

const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
}));

// my attempt at a TodoStore
interface TodoState {
  todoLists: TodoList[];
  filterOptions: FilterOption[];
}

const useTodoStore = create<TodoState>()((set) => ({
  todoLists: defaultWithUserLists,
  filterOptions: filterOptionsList,
}));

export { useBearStore, useTodoStore };
