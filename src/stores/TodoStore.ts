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
  updateFilterOption: (newFilterOptions: FilterOption) => void;
}

const useTodoStore = create<TodoState>()((set, get) => ({
  todoLists: defaultWithUserLists,
  filterOptions: filterOptionsList,
  // TODO: fix list jumping when updating filter
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
    // let filterToUpdate = filterOptionsList.filter(
    //   (filter) => filter.name == newFilterOption.name,
    // )[0];
    // filterToUpdate = newFilterOption;
    // return set((state) => ({
    //   filterOptions: [
    //     ...state.filterOptions.filter(
    //       (filter) => filter.name != newFilterOption.name,
    //     ),
    //     newFilterOption,
    //   ],
    // }));
  },
}));

export { useBearStore, useTodoStore };
