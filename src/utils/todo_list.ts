import { Todo } from "./todo";

export type TodoList = {
  id: number;
  name: string;
  comprisedOf: Todo[];
};
