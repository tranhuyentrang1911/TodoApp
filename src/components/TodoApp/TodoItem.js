import React, { useCallback } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
export default function TodoItem({
  todo,
  onCheckBtnClick,
  onDeleteBtnClick,
  onUpdateBtnClick,
}) {
  const [textUpdate, setTextUpdate] = useState(todo.name);
  const onTextUpdateChange = useCallback((e) => {
    setTextUpdate(e.target.value);
    console.log(e.target.value);
  }, []);
  return (
    <li className={todo.isCompleted ? "finished" : ""}>
      <textarea value={textUpdate} onChange={onTextUpdateChange} />
      <div>
        <i
          className="fa-solid fa-file-pen update"
          onClick={() => {
            onUpdateBtnClick(todo.id, textUpdate);
          }}
        ></i>
        <i
          className="fa-solid fa-check check"
          onClick={() => {
            onCheckBtnClick(todo.id);
          }}
        ></i>
        <i
          className="fa-solid fa-trash-can delete"
          onClick={() => {
            onDeleteBtnClick(todo.id);
          }}
        ></i>
      </div>
    </li>
  );
}
