import { faker } from "@faker-js/faker";
import { Todo } from "../todo";
import { PriorityTag } from "../todo_priority_tag";
import { TODO_LISTS_USER_ADDED_NAMES } from "./todo_user_made_lists_demo";

export function generateRandomTodo(): Todo {
  return new Todo({
    id: faker.datatype.number(),
    title: faker.random.words(),
    priority: faker.helpers.arrayElement([
      new PriorityTag("bg-gray-500/80 dark:bg-gray-700/80", "P0"),
      new PriorityTag("bg-red-800/80", "P1"),
      new PriorityTag("bg-yellow-700/80", "P2"),
      new PriorityTag("bg-cyan-600/80 dark:bg-teal-500/90", "P3"),
    ]),
    ownerList:
      faker.datatype.number({ min: 0, max: 10 }) >= 8
        ? faker.helpers.arrayElement(TODO_LISTS_USER_ADDED_NAMES)
        : undefined,
    note:
      faker.datatype.number({ min: 0, max: 10 }) >= 3
        ? faker.lorem.paragraph()
        : undefined,
    completed: faker.datatype.number({ min: 0, max: 1 }) === 1,
    deleted: faker.datatype.number({ min: 0, max: 10 }) >= 8,
    created: faker.date.past(),
    due:
      faker.datatype.number({ min: 0, max: 10 }) >= 4
        ? faker.date.future()
        : undefined,
    pinned: faker.datatype.number({ min: 0, max: 10 }) >= 7,
  });
}
