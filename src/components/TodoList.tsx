import React from "react";
import { Todo } from "../utils/todo";
import { MdOutlineDoneOutline } from "react-icons/md";
import { AiFillPushpin } from "react-icons/ai";

type Props = {
  todos: Todo[];
};

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <div className="flex flex-col gap-2">
      {todos.map((listItem) => {
        return (
          <div key={listItem.todo.id} className="flex flex-col">
            <h1>{listItem.todo.title.toUpperCase()}</h1>
            <p>{listItem.todo.note}</p>
            {listItem.todo.completed && <MdOutlineDoneOutline />}
            {listItem.todo.pinned && <AiFillPushpin />}
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
