import { Form, Formik } from "formik";
import React from "react";
import Input from "../input/Input";
import "./index.css";
import { loginValidationSchema } from "./validationSchema";

const Login = () => {
  return (
    <div className="signup">
      <Formik
        initialValues={{
          userType: "",
          email: "",
          userName: "",
          mobileNumber: "",
          password: "",
        }}
        onSubmit={(values) => {}}
        validationSchema={loginValidationSchema}
      >
        {({ isSubmitting, handleSubmit, errors, touched }) => (
          <Form className="signup__form">
            <Input
              name="email"
              type="email"
              holder="Enter Email"
              errors={errors}
              touched={touched}
            />

            <Input
              name="password"
              holder="Password "
              errors={errors}
              touched={touched}
            />

            <div className="signup__button">
              <button type="submit" onClick={handleSubmit}>
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
