import React from "react";
import TodoList from "../components/TodoList";
import FilterBar from "../components/FilterBar";

type Props = {};

const TodoPage = (props: Props) => {
  return (
    <>
      <FilterBar />
      <TodoList />
    </>
  );
};

export default TodoPage;
