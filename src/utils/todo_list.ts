import { generateRandomTodo } from "./generate_random_todos";
import { FilterTodos, SortTodos } from "./sort_filter_todos";
import { Todo } from "./todo";

export type TodoListParams = {
  id: number;
  name: string;
  comprisedOf: Todo[];
};

export class TodoList {
  id: number;
  name: string;
  comprisedOf: Todo[];

  constructor({ id, name, comprisedOf }: TodoListParams) {
    this.id = id;
    this.name = name;
    this.comprisedOf = comprisedOf;
  }
}

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
      .sort(SortTodos.sortAlphabeticallyAscending),
  }),
];
