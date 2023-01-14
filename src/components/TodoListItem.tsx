import React from "react";
import { MdOutlineDoneOutline } from "react-icons/md";
import { AiFillPushpin } from "react-icons/ai";
import { Todo } from "../utils/todo";

type Props = {
  todoItem: Todo;
};

const TodoListItem: React.FC<Props> = ({ todoItem }) => {
  var todo = todoItem.todo;
  return (
    <div
      key={todo.id}
      className="flex flex-col secondary-container on-secondary-container-text p-1 rounded-md"
    >
      <div className="flex gap-1">
        {todo.completed && <MdOutlineDoneOutline />}
        {todo.pinned && <AiFillPushpin />}
      </div>
      <h1 className="headline-small">{todo.title.toUpperCase()}</h1>
      <p className="body-large">{todo.note}</p>
    </div>
  );
};

export default TodoListItem;
