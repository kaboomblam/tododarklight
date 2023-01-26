import React from "react";
import { create } from "zustand";
import { Todo } from "../utils/todo";
import { FilterOption } from "../utils/filters";
import { ImCalendar, ImFlag, ImList } from "react-icons/im";
import { filterList } from "../utils/filter_list";

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
  todos: Todo[];
  filters: FilterOption[];
}

const useTodoStore = create<TodoState>()((set) => ({
  todos: [],
  filters: filterList,
}));

export { useBearStore, useTodoStore };
