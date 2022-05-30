import React, { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { errorMessage, label, onChange, id, ...inputProps } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="form_group">
      <label htmlFor="password" className="form_label">
        {label}
      </label>
      <input
        className="form_control"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => {
          if (inputProps.name === "confirmPassword") setFocused(true);
          else setFocused(false);
        }}
        focused={focused.toString()}
      />
      <small className="form_message">{errorMessage}</small>
    </div>
  );
};

export default FormInput;
