import { faker } from "@faker-js/faker";
import { Todo } from "./todo";

export const STARTING_TODOS: Todo[] = [];

function generateRandomTodo(): Todo {
  return new Todo({
    id: faker.datatype.number(),
    title: faker.random.words(),
    completed: faker.datatype.number({ min: 0, max: 1 }) === 1,
    deleted: faker.datatype.number({ min: 0, max: 10 }) >= 8,
    created: faker.date.past(),
    pinned: faker.datatype.number({ min: 0, max: 10 }) === 7,
  });
}

Array.from({ length: 40 }).forEach(() => {
  STARTING_TODOS.push(generateRandomTodo());
});
