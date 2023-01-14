type TodoElement = {
  id: number;
  title: string;
  note?: string;
  completed: boolean;
  deleted: boolean;
  created: Date;
  pinned: boolean;
};

export class Todo {
  todo: TodoElement;

  constructor(todo: TodoElement) {
    this.todo = todo;
  }
}
