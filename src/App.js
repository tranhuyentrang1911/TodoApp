import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import FormSignUp from "./components/Form/FormSignUp";
import FormSignIn from "./components/Form/FormSignIn";
import TodoApp from "./components/TodoApp/TodoApp";

function App() {
  function fetchToken(url) {
    fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        // Read the response as json.
        return response.json();
      })
      .then(function (responseAsJson) {
        // Do stuff with the JSON
        localStorage.setItem("storageKey", JSON.stringify(responseAsJson));
      })
      .catch(function (error) {
        console.log("Looks like there was a problem: \n", error);
      });
  }

  const checkAuth = (url) => {
    fetchToken(url);
    if (localStorage.getItem("storageKey")) return true;
    return false;
  };
  return (
    <Routes>
      <Route path="/" element={<FormSignIn />} />
      <Route
        path="/TodoApp"
        render={() => {
          const url = "https://app-json-demo.herokuapp.com/api/login";
          return checkAuth(url) ? <TodoApp /> : <Navigate to="/" />;
        }}
        // element={<TodoApp />}
      />
      <Route path="/FormSignUp" element={<FormSignUp />} />
    </Routes>
  );
}

export default App;
