import React from "react";
import { MdModeEditOutline, MdOutlineDoneOutline } from "react-icons/md";
import { BsPinFill } from "react-icons/bs";

import { AiFillDelete, AiFillPushpin, AiOutlineDown } from "react-icons/ai";
import { BiCaretDownCircle } from "react-icons/bi";
import { Todo } from "../utils/todo";

type Props = {
  todoItem: Todo;
};

const TodoListCardItem: React.FC<Props> = ({ todoItem }) => {
  var todo = todoItem.todoObj;
  return (
    <div
      key={todo.id}
      className="bg-indigo-300 dark:bg-slate-500 text-indigo-100 flex flex-col gap-2.5 p-2 rounded-md"
    >
      {/* Information bar */}
      <div className="flex gap-2 text-sm">
        <div className="flex items-center text-stone-100/90 bg-stone-400/60 dark:bg-stone-400/80 rounded-full px-2">
          <p className="bg-red-500/0 text-center">
            {todo.created.toDateString()}
          </p>
        </div>
        {todo.due && (
          <div className="flex items-center bg-stone-500/80 dark:bg-stone-600/50 rounded-full px-2 text-indigo-50/90 dark:text-indigo-50/70">
            <p>{todo.due.toDateString()}</p>
          </div>
        )}
        <div className="flex-1 text-2xl flex items-end justify-end gap-1.5 bg-red-500/0">
          <div className="opacity-75 bg-slate-400 rounded px-1 py-0.5 text-stone-500/70">
            <AiFillDelete />
          </div>
          <div className="flex items-center opacity-75 bg-slate-400 text-slate-100 rounded px-1 py-0.5">
            <AiFillPushpin />
            {/* <p>PINNED</p> */}
          </div>
        </div>
      </div>
      {/* Title bar */}
      <div className="flex gap-2 text-lg items-center">
        <div className="w-5 h-5 bg-indigo-100 rounded-sm"></div>
        <div className="text-lg font-[800] text-indigo-50 bg-red-800/80 py-1 px-2 rounded">
          P3
        </div>
        <div className="text-lg font-[800] text-indigo-50 bg-gray-800/80 py-1 px-2 rounded">
          Title
        </div>
      </div>
      {/* Notes bar */}
      <div className="flex gap-2 text-sm items-start">
        <div className="flex-1 text-sm font-bold bg-gray-800/0 p-2 rounded-sm text-indigo-50">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores ea
            itaque sapiente veritatis rerum ex ut saepe tempora temporibus
            ipsam. Illum inventore incidunt aperiam accusamus beatae dolorum,
            eaque illo reiciendis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodoListCardItem;
