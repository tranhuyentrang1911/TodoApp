import React from "react";
import TodoList from "./TodoList";
import "./style.css";
import { useCallback, useEffect, useState } from "react";
import { v4 } from "uuid";
const TODO_LOCAL_STORAGE = "TODO_APP";
const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");
  useEffect(() => {
    const todoStorage = localStorage.getItem(TODO_LOCAL_STORAGE);
    if (todoStorage) {
      setTodoList(JSON.parse(todoStorage));
    }
  }, []);

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  const onAddBtnCLick = useCallback(
    (e) => {
      if (textInput) {
        const arrStore = [
          { id: v4(), name: textInput, isCompleted: false },
          ...todoList,
        ];
        setTodoList(arrStore);
        localStorage.setItem(TODO_LOCAL_STORAGE, JSON.stringify(arrStore));
      }
      setTextInput("");
    },
    [textInput, todoList]
  );

  const onCheckBtnClick = useCallback((id) => {
    setTodoList((pre) =>
      pre.map((todo) => {
        if (todo.id === id) return { ...todo, isCompleted: !todo.isCompleted };
        else return todo;
      })
    );
  }, []);

  const onDeleteBtnClick = useCallback((id) => {
    setTodoList((pre) =>
      pre.filter((todo) => {
        if (todo.id === id) return false;
        else return true;
      })
    );
  }, []);

  const onUpdateBtnClick = useCallback((id, name) => {
    setTodoList((pre) =>
      pre.map((todo) => {
        if (todo.id === id) return { ...todo, name: name };
        else return todo;
      })
    );
  }, []);

  return (
    <div className="main">
      <form
        className="form"
        id="form_todo"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2>TO - DO LIST</h2>
        <div className="spacer"></div>
        <input
          className="todo_input"
          type="text"
          placeholder="Enter your work"
          value={textInput}
          onChange={onTextInputChange}
        />
        <button className="button_add" onClick={onAddBtnCLick}>
          Add
        </button>
        <div className="container">
          <TodoList
            todoList={todoList}
            onCheckBtnClick={onCheckBtnClick}
            onDeleteBtnClick={onDeleteBtnClick}
            onUpdateBtnClick={onUpdateBtnClick}
          />
        </div>
      </form>
    </div>
  );
};

export default TodoApp;
