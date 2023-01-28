import React from "react";
import TodoList from "../components/list_components/TodoList";
import FilterBar from "../components/filter_components/FilterBar";

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
