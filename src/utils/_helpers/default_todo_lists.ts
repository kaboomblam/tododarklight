import { TodoList } from "../todo_list";
import { generateRandomTodo } from "./generate_random_todos";
import { FilterTodos, SortTodos } from "./sort_filter_todos";
import { TODO_LISTS_USER_ADDED_NAMES } from "./todo_user_made_lists_demo";

const placeholderRandomList = Array.from({ length: 20 }).map(() =>
  generateRandomTodo(),
);

export const defaultTodoLists: TodoList[] = [
  new TodoList({
    id: 1234,
    name: "Pinned",
    comprisedOf: placeholderRandomList
      .filter(FilterTodos.filterPinned)
      .sort(SortTodos.sortAlphabeticallyAscending),
  }),
  new TodoList({
    id: 1235,
    name: "Todos",
    comprisedOf: placeholderRandomList
      .filter(FilterTodos.filterUnpinned)
      .filter(FilterTodos.filterNoCategory)
      .sort(SortTodos.sortAlphabeticallyAscending),
  }),
];

let userAddedListsDemo = TODO_LISTS_USER_ADDED_NAMES.map((listName) => {
  return new TodoList({
    id: Math.random(),
    name: listName,
    comprisedOf: placeholderRandomList
      .filter((todo) => FilterTodos.filterBasedOnListName(listName, todo))
      .sort(SortTodos.sortAlphabeticallyAscending),
  });
});

export const defaultWithUserMadeLists = [
  ...defaultTodoLists,
  ...userAddedListsDemo,
];
