import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "./FormInput";
import "./form.css";

const FormSignUp = () => {
  const [values, setValues] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Tran Van A",
      errorMessage: "",
      label: "Username *",
      required: true,
    },
    {
      id: 2,
      name: "phone",
      type: "text",
      placeholder: "0123456789",
      errorMessage: "Phone Invalid",
      label: "Phone *",
      pattern: "^[0-9-+]{9,15}$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "abc@gmail.com",
      errorMessage: "Email Invalid",
      label: "Email *",
      pattern: "^[w-.]+@([w-]+.)+[w-]{2,4}$",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Nhập mật khẩu",
      errorMessage: "Password Invalid",
      label: "Password *",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Nhập lại mật khẩu",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password *",
      pattern: values.password,
      required: true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="main">
      <form onSubmit={handleSubmit} action="" className="form" id="form_signup">
        <h3 className="heading">Sign Up</h3>

        <div className="spacer"></div>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button className="form_submit">Sign up</button>

        <div className="form_link">
          Already have an account?
          <Link to="/">Sign in</Link>
        </div>
      </form>
    </div>
  );
};

export default FormSignUp;
