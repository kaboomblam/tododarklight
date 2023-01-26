import React from "react";
import {
  FilterOption,
  dueDateFilters,
  priorityFilters,
  sortFilters,
} from "./filters";
import { ImCalendar, ImFlag, ImList } from "react-icons/im";

export const filterListUserAddedNames = ["School", "Work", "Personal"];

export let filterOptionsList = [
  new FilterOption({
    name: "priority",
    icon: <ImFlag className="bg-red-500/0" />,
    values: priorityFilters,
    currentValue: 0,
  }),
  new FilterOption({
    name: "dueDate",
    icon: <ImCalendar className="bg-red-500/0" />,
    values: dueDateFilters,
    currentValue: 2,
  }),
  new FilterOption({
    name: "sort",
    icon: <ImList className="bg-red-500/0" />,
    values: sortFilters,
    currentValue: sortFilters.length - 1,
  }),
];
