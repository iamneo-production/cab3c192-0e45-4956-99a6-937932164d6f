import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { json, useNavigate, useParams } from "react-router-dom";
import {
  addAcadamies,
  updateAcademyDetails,
} from "../../../../store/actions/global";
import "./index.css";

const Add = () => {
  const { academies, inputValues } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  console.log("academies", academies, id);
  return (
    <Formik
      initialValues={inputValues}
      onSubmit={(values) => {
        if (id) {
          // const data = JSON.parse(JSON.stringify(academies));
          // data[+id - 1] = values;
          // console.log(data, +id - 1);
          // dispatch(updateAcademyDetails(data));
        } else {
          // dispatch(addAcadamies(values));
          fetch("http://localhost:8080/institute", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((data) => {
              console.log(data);
              navigate("/academy");
            })
            .catch((e) => {
              console.log(e);
            });
        }
        // navigate("/academy");
      }}
    >
      {({ isSubmitting, handleSubmit, errors, touched }) => (
        <Form className="container">
          <div className="input">
            <Input
              name="academyName"
              type="text"
              holder="Enter Academy name"
              className="input_value"
            />

            <Input
              name="contactNumber"
              holder="Enter the contact number"
              className="input_value"
            />
          </div>
          <div className="input">
            <Input
              name="imageUrl"
              type="text"
              holder="Enter the acadmey Image url"
            />

            <Input
              name="academyEmail"
              holder="Enter the acadmey email"
              type="email"
            />
          </div>
          <div className="input">
            <Input
              name="academyLocation"
              type="text"
              holder="Enter Academy Location"
            />

            <Input
              name="academyDesc"
              holder="Enter Acadmey description"
              as="textarea"
            />
          </div>

          <div className="btn">
            <button type="submit" className="button" onClick={handleSubmit}>
              {id ? "UPDATE" : "ADD"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Add;

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
