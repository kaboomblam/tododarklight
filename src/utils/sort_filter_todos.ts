import { Todo } from "./todo";

export class SortTodos {
  static sortAlphabeticallyAscending = function (a: Todo, b: Todo) {
    if (a.todoItem.title < b.todoItem.title) {
      return -1;
    }
    if (a.todoItem.title > b.todoItem.title) {
      return 1;
    }
    return 0;
  };

  static sortAlphabeticallyDescending = function (a: Todo, b: Todo) {
    if (a.todoItem.title < b.todoItem.title) {
      return 1;
    }
    if (a.todoItem.title > b.todoItem.title) {
      return -1;
    }
    return 0;
  };

  static sortCreatedDateAscending = (a: Todo, b: Todo) =>
    a.todoItem.created.getTime() - b.todoItem.created.getTime();

  static sortCreatedDateDescending = (a: Todo, b: Todo) =>
    b.todoItem.created.getTime() - a.todoItem.created.getTime();

  static sortDueDateAscending = (a: Todo, b: Todo) =>
    a.todoItem.due && b.todoItem.due
      ? a.todoItem.due.getTime() - b.todoItem.due.getTime()
      : 0;

  static sortDueDateDescending = (a: Todo, b: Todo) =>
    a.todoItem.due && b.todoItem.due
      ? b.todoItem.due.getTime() - a.todoItem.due.getTime()
      : 0;
}

export class FilterTodos {
  static filterCompleted = (todo: Todo) => todo.todoItem.completed;
  static filterDeleted = (todo: Todo) => todo.todoItem.deleted;
  static filterPinned = (todo: Todo) => todo.todoItem.pinned;
  static filterUnpinned = (todo: Todo) => !todo.todoItem.pinned;
}
