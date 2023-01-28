import React from "react";
import { create } from "zustand";
import { Todo } from "../utils/todo";
import { FilterOption } from "../utils/filter_option";
import { ImCalendar, ImFlag, ImList } from "react-icons/im";
import { filterOptionsList } from "../components/_helpers/filter_options_list";
import { TodoList } from "../utils/todo_list";
import { defaultWithUserMadeLists } from "../utils/_helpers/default_todo_lists";

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
  updateFilterOption: (newFilterOptions: FilterOption) => void;
}

const useTodoStore = create<TodoState>()((set, get) => ({
  todoLists: defaultWithUserMadeLists,
  filterOptions: filterOptionsList,
  updateFilterOption: function (newFilterOption: FilterOption) {
    const filterToUpdate = get().filterOptions;
    const index = filterToUpdate.findIndex(
      (filter) => filter.name == newFilterOption.name,
    );
    filterToUpdate[index] = newFilterOption;
    return set((state) => ({
      ...state,
      filterOptions: [...filterToUpdate],
    }));
  },
}));

export { useBearStore, useTodoStore };
