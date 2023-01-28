import { Todo } from "./todo";

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
