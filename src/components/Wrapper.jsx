import React from "react";
import TodoApp from "./TodoApp/TodoApp";
import FormSignIn from "./Form/FormSignIn";

const Wrapper = () => {
  if (localStorage.getItem("storageKey")) {
    return (
      <>
        <TodoApp />
      </>
    );
  } else {
    return <FormSignIn />;
  }
};

export default Wrapper;
