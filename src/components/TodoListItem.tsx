import React from "react";
import { MdModeEditOutline, MdOutlineDoneOutline } from "react-icons/md";
import { BsPinFill } from "react-icons/bs";

import { AiFillPushpin, AiOutlineDown } from "react-icons/ai";
import { BiCaretDownCircle } from "react-icons/bi";
import { Todo } from "../utils/todo";

type Props = {
  todoItem: Todo;
};

const TodoListItem: React.FC<Props> = ({ todoItem }) => {
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
        <div className="text-lg font-[800]">Title</div>
      </div>
      {/* Notes bar */}
      <div className="flex gap-2 text-sm items-start">
        <div className="flex bg-stone-400 rounded-full px-2 py-1">
          <p>Notes</p>
        </div>
        <div className="flex-1 text-sm font-[400]">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores ea
            itaque sapiente veritatis rerum ex ut saepe tempora temporibus
            ipsam. Illum inventore incidunt aperiam accusamus beatae dolorum,
            eaque illo reiciendis.
          </p>
        </div>
      </div>
      {/* Actions bar */}
      <div className="flex gap-2 text-base items-center">
        <div className="flex items-center gap-1 text-stone-500 bg-[#f2e0fe7a] hover:bg-indigo-800 hover:text-indigo-100 cursor-pointer px-2 font-[800] rounded-lg transition-all duration-300">
          <div className="w-2 h-2 rounded-full bg-red-500/50 dark:bg-red-500/70 mr-1"></div>
          <p>Priority 3</p>
          <div className="opacity-70 dark:opacity-80">
            <BiCaretDownCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoListItem;
