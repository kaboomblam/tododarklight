import React from "react";
import { FilterOption } from "../../utils/filter_option";
import { ImCalendar, ImFlag, ImList } from "react-icons/im";
import {
  DUE_DATE_FILTERS,
  PRIORITY_FILTERS,
  SORT_FILTERS,
} from "../../constants";

export let filterOptionsList = [
  new FilterOption({
    name: "priority",
    icon: <ImFlag className="bg-red-500/0" />,
    values: PRIORITY_FILTERS,
    currentValue: 0,
  }),
  new FilterOption({
    name: "dueDate",
    icon: <ImCalendar className="bg-red-500/0" />,
    values: DUE_DATE_FILTERS,
    currentValue: 2,
  }),
  new FilterOption({
    name: "sort",
    icon: <ImList className="bg-red-500/0" />,
    values: SORT_FILTERS,
    currentValue: SORT_FILTERS.length - 1,
  }),
];
