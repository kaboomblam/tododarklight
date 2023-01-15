import React from "react";
import { MdModeEditOutline, MdOutlineDoneOutline } from "react-icons/md";
import { BsPinFill } from "react-icons/bs";

import { AiFillPushpin } from "react-icons/ai";
import { Todo } from "../utils/todo";

type Props = {
  todoItem: Todo;
};

const TodoListItem: React.FC<Props> = ({ todoItem }) => {
  var todo = todoItem.todo;
  return (
    <div key={todo.id} className="flex flex-col gap-1 p-1.5 rounded-md">
      <div className="flex gap-2.5 items-start">
        {todo.pinned && (
          <div className="flex items-center gap-1">
            <AiFillPushpin /> Pinned
          </div>
        )}
        {todo.completed && (
          <div className="flex items-center gap-1">
            <MdOutlineDoneOutline /> Completed
          </div>
        )}
        <div className="flex flex-1 justify-end">
          <button className="btn-primary">
            <BsPinFill />
          </button>
        </div>
      </div>
      <p className="body-small opacity-75">{todo.created.toDateString()}</p>

      <div className="flex">
        <h1 className="">{todo.title.toUpperCase()}</h1>
      </div>
      {todo.note && <p className="mb-1 opacity-80">{todo.note}</p>}
      <div className="flex gap-1 items-stretch justify-evenly">
        <button className="rounded-sm px-2 flex-1 flex items-center gap-1">
          <MdModeEditOutline size={18} />
          <p className="pt-0.5 flex-1">Edit</p>
        </button>
        <button className="flex-[2] flex items-center gap-1 border-none rounded-sm p-2">
          <MdOutlineDoneOutline size={18} />{" "}
          <p className="pt-0.5 flex-1">Complete</p>
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
