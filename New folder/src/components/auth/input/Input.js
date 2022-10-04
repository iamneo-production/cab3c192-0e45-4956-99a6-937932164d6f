import React, { useState } from "react";
import { ErrorMessage, Field } from "formik";
import "./input.css";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Input = ({ name, type, holder, errors, touched }) => {
  return (
    <div className="auth__input">
      <Field type={type} name={name} placeholder={holder} />

      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};

export default Input;
export const DropdownInput = ({ name, setFieldValue, value }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="auth__input">
      <div className="auth__dropdown" onClick={() => setShow((prev) => !prev)}>
        <p style={{ color: value ? "black" : "rgba(0, 0, 0, 0.304)" }}>
          {value ? value : "Enter Admin/User"}
        </p>
        <ArrowDropDownIcon />
        {show && (
          <div>
            <p onClick={() => setFieldValue(name, "Admin")}>Admin</p>
            <p onClick={() => setFieldValue(name, "User")}>User</p>
          </div>
        )}
      </div>

      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};
