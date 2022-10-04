import { Form, Formik } from "formik";
import React from "react";
import Input, { DropdownInput } from "../input/Input";
import "./index.css";
import { singupValidationSchema } from "./validationSchema";

const Signup = () => {
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
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={singupValidationSchema}
      >
        {({ isSubmitting, handleSubmit, setFieldValue, values }) => (
          <Form className="signup__form">
            {/* <Input
              name="userType"
              type="text"
              holder="Enter Admin/User"
              value={values.userType}
            /> */}
            <DropdownInput
              name="userType"
              setFieldValue={setFieldValue}
              value={values.userType}
            />
            <Input name="email" type="email" holder="Enter Email" id="email" />
            <Input name="userName" type="text" holder="Enter Username" />
            <Input name="mobileNumber" holder="Enter MobileNumber " />
            <Input name="password" holder="Password " />
            <Input name="confirmPassowrd" holder="Confirm Password" />
            <div className="signup__button">
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
