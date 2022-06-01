import "./App.css";
import { Routes, Route } from "react-router-dom";
import FormSignUp from "./components/Form/FormSignUp";
import FormSignIn from "./components/Form/FormSignIn";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormSignIn />} />
      <Route path="/TodoApp" element={<Wrapper />} />
      <Route path="/FormSignUp" element={<FormSignUp />} />
    </Routes>
  );
}

export default App;
