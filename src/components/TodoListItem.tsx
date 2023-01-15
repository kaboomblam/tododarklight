import React from "react";
import { MdModeEditOutline, MdOutlineDoneOutline } from "react-icons/md";
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
      className="flex flex-col gap-1 tertiary-container on-secondary-container-text p-1.5 rounded-md"
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
      <hr className="text-red-400" />
      <div className="flex">
        <h1 className="headline-small">{todo.title.toUpperCase()}</h1>
      </div>
      <p className="bg-yellow-100/0 p-1 rounded opacity-70">{todo.note}</p>
      <div className="flex gap-1 items-stretch justify-evenly">
        <button className="on-surface-variant on-primary-text rounded-sm px-2 flex-1 flex items-center gap-1">
          <MdModeEditOutline size={18} />
          <p className="pt-0.5 flex-1 body-medium">Edit</p>
        </button>
        <button className="btn-primary flex-[2] flex items-center gap-1">
          <MdOutlineDoneOutline size={18} />{" "}
          <p className="pt-0.5 flex-1">Complete</p>
        </button>
        {/* <button className="btn-primary flex-1 flex items-center gap-1">
          <AiFillPushpin size={18} /> <p className="pt-0.5 flex-1">Pin</p>
        </button> */}
        {/* <button className="btn-primary flex-1">Complete</button> */}
        {/* <button className="btn-primary flex-1">Pin</button> */}
      </div>
    </div>
  );
};

export default TodoListItem;
