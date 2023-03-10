import React, { useState } from "react";
import ListHeadingTile from "./ListHeadingTile";
import CollapseListButton from "./CollapseListButton";
import { Todo } from "../../utils/todo";
import TodoListCardItem from "../TodoCardItem";

type Props = {
  todos: Todo[];
  name: string;
};

const CollapsablePartialList = (props: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function cards(): JSX.Element {
    return (
      <div className="flex flex-col gap-2">
        {props.todos.map((listItem) => {
          return (
            <TodoListCardItem key={listItem.todoItem.id} todoItem={listItem} />
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 mb-1 mt-3.5 items-center">
        <ListHeadingTile
          label={props.name}
          listSize={props.todos.length}
          color="bg-indigo-500/80"
        />
        <ListHeadingTile
          label="Due"
          listSize={props.todos.length}
          color="bg-red-600/70"
        />
        <div className="flex-1 flex justify-end">
          <CollapseListButton
            onClick={() => setIsCollapsed(!isCollapsed)}
            isCollapsed={isCollapsed}
          />
        </div>
      </div>
      {!isCollapsed &&
        (props.todos.length > 0 ? (
          cards()
        ) : (
          <p className="text-gray-500">No items</p>
        ))}
    </div>
  );
};

export default CollapsablePartialList;
