import React from "react";
import NavBar from "../components/NavBar";
import TodoList from "../components/TodoList";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="mx-auto md:container">
        <TodoList />
      </div>
    </>
  );
};

export default HomePage;
