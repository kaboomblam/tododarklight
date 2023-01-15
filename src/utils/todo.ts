type TodoElement = {
  id: number;
  title: string;
  priority: PriorityTag;
  due?: Date;
  note?: string;
  completed: boolean;
  deleted: boolean;
  created: Date;
  pinned: boolean;
};

export class PriorityTag {
  color: string;
  value: string;

  constructor(color: string, value: string) {
    this.color = color;
    this.value = value;
  }
}

export class Todo {
  todoObj: TodoElement;

  constructor(todo: TodoElement) {
    this.todoObj = todo;
  }
}
