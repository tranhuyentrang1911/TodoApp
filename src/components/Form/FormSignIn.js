import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "./FormInput";
import "./form.css";
const FormSignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "abc@gmail.com",
      errorMessage: "Email Invalid",
      label: "Email *",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Nhập mật khẩu",
      errorMessage: "Password Invalid",
      label: "Password *",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
  ];
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
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const url = "https://app-json-demo.herokuapp.com/api/login";
    e.preventDefault();
    if (checkAuth(url)) {
      navigate("/TodoApp");
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="main">
      <form onSubmit={handleSubmit} action="" className="form" id="form_signin">
        <h3 className="heading">Sign In</h3>

        <div className="spacer"></div>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button className="form_submit">Sign in</button>

        <div className="form_link">
          Don't have an account?
          <Link to="/FormSignUp">Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default FormSignIn;
