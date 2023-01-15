import React from "react";
import { MdModeEditOutline, MdOutlineDoneOutline } from "react-icons/md";
import { BsPinFill } from "react-icons/bs";

import { AiFillPushpin, AiOutlineDown } from "react-icons/ai";
import { BiCaretDownCircle } from "react-icons/bi";
import { Todo } from "../utils/todo";

type Props = {
  todoItem: Todo;
};

const TodoListCardItem: React.FC<Props> = ({ todoItem }) => {
  var todo = todoItem.todo;
  return (
    <div
      key={todo.id}
      className="bg-indigo-300 dark:bg-slate-500 text-indigo-100 flex flex-col gap-2.5 p-2 rounded-md"
    >
      {/* Information bar */}
      <div className="flex gap-2 text-sm">
        <div className="flex bg-stone-400 rounded-full px-2">
          <p>Created On</p>
        </div>
        <div className="flex bg-stone-500 rounded-full px-2">
          <p>Due Date</p>
        </div>
        <div className="flex-1 text-2xl flex items-end justify-end bg-red-500/0">
          <BsPinFill />
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
