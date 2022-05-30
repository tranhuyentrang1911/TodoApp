import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({
  todoList,
  onCheckBtnClick,
  onDeleteBtnClick,
  onUpdateBtnClick,
}) {
  return (
    <ul className="todos">
      {todoList.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCheckBtnClick={onCheckBtnClick}
            onDeleteBtnClick={onDeleteBtnClick}
            onUpdateBtnClick={onUpdateBtnClick}
          />
        );
      })}
    </ul>
  );
}
