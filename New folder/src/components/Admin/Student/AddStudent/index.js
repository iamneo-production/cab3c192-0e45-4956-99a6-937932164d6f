import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { json, useNavigate, useParams } from "react-router-dom";

import "./index.css";
import {
  addStudents,
  updateStudentDetails,
} from "../../../../store/actions/student";

const AddStudent = () => {
  const { students, inputValues } = useSelector((state) => state.student);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  console.log("academies", students, id);
  return (
    <Formik
      initialValues={inputValues}
      onSubmit={(values) => {
        if (id) {
          const data = JSON.parse(JSON.stringify(students));
          data[+id - 1] = values;
          console.log(data, +id - 1);
          dispatch(updateStudentDetails(data));
        } else {
          dispatch(addStudents(values));
        }
        navigate("/students");
      }}
    >
      {({ isSubmitting, handleSubmit, errors, touched }) => (
        <Form className="container">
          <div className="input">
            <Input
              name="firstName"
              type="text"
              holder="Enter your first name"
              className="input_value"
            />

            <Input
              name="lastName"
              holder="Enter your last name"
              className="input_value"
            />
            <Input name="gender" type="text" holder="Enter male or female" />
          </div>

          <div className="input">
            <Input
              name="fatherName"
              type="text"
              holder="Enter your father name"
            />

            <Input name="phoneNumber" holder="Enter your email" type="email" />
            <Input
              name="alternativeNumber"
              holder="Enter alternative number"
              type="email"
            />
          </div>
          <div className="input">
            <div className="inputs">
              <Input
                name="motherName"
                type="text"
                holder="Enter your mother name"
              />

              <Input name="emailId" holder="Enter email id" as="textarea" />
              <Input name="age" holder="Enter your age" as="textarea" />
            </div>

            <div className="Adress_container">
              <h1 className="adress_heading"> Address information</h1>
              <div className="label">
                <label>House No : </label>
                <AddressInput name="houseNo" holder="" />
              </div>
              <div className="label">
                <label>Street Name : </label>
                <AddressInput name="streetName" holder="" />
              </div>
              <div className="label_container">
                <div className="label">
                  <label>Area Name: </label>
                  <AddressInputs name="areaName" holder="" />
                </div>
                <div className="label">
                  <label>Pincode : </label>
                  <AddressInputs name="pinCode" holder="" />
                </div>
              </div>
              <div className="label_container">
                <div className="label">
                  <label>State : </label>
                  <AddressInputs name="state" holder="" />
                </div>
                <div className="label">
                  <label>Nationality : </label>
                  <AddressInputs name="nationality" holder="" />
                </div>
              </div>
            </div>
          </div>

          <div className="btn">
            <button type="submit" className="button" onClick={handleSubmit}>
              {id ? "UPDATESTUDENT" : "ADDSTUDENT"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddStudent;

const Input = ({ name, type, holder, as }) => {
  return (
    <div className="">
      <Field
        type={type}
        name={name}
        placeholder={holder}
        className="input__value"
        as={as}
        rows="20"
      />

      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};

const AddressInput = ({ name, type, holder, as }) => {
  return (
    <div className="">
      <Field
        type={type}
        name={name}
        placeholder={holder}
        className="address__input"
      />

      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};

const AddressInputs = ({ name, type, holder, as }) => {
  return (
    <div className="">
      <Field
        type={type}
        name={name}
        placeholder={holder}
        className="address__inputs"
      />

      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};
