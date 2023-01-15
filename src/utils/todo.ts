type TodoElement = {
  id: number;
  title: string;
  due?: Date;
  note?: string;
  completed: boolean;
  deleted: boolean;
  created: Date;
  pinned: boolean;
};

export class Todo {
  todoObj: TodoElement;

  constructor(todo: TodoElement) {
    this.todoObj = todo;
  }
}
