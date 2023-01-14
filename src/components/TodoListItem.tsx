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
      className="flex flex-col gap-1 secondary-container on-secondary-container-text p-1.5 rounded-md"
    >
      <div className="flex gap-2.5">
        {todo.completed && (
          <div className="flex items-center gap-1">
            <MdOutlineDoneOutline /> Completed
          </div>
        )}
        {todo.pinned && (
          <div className="flex items-center gap-1">
            <AiFillPushpin /> Pinned
          </div>
        )}
      </div>
      <p className="body-small opacity-75">{todo.created.toDateString()}</p>
      <div className="flex">
        <h1 className="headline-small">{todo.title.toUpperCase()}</h1>
      </div>
      <p className="body-large bg-yellow-100/30 p-1 rounded">{todo.note}</p>
      <div className="flex gap-1">
        <button className="btn-primary">Edit</button>
        <button className="btn-primary">Complete</button>
        <button className="btn-primary">Pin</button>
      </div>
    </div>
  );
};

export default TodoListItem;
