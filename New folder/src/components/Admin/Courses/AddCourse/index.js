import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { json, useNavigate, useParams } from "react-router-dom";
import {
  addCourses,
  updateCourseDetails,
} from "../../../../store/actions/course";

import "./index.css";

const AddCourses = () => {
  const { courses, inputValues } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  console.log("courses", courses, id);
  return (
    <Formik
      initialValues={inputValues}
      onSubmit={(values) => {
        if (id) {
          const data = JSON.parse(JSON.stringify(courses));
          data[+id - 1] = values;
          console.log(data, +id - 1);
          dispatch(updateCourseDetails(data));
        } else {
          dispatch(addCourses(values));
        }
        navigate("/courses");
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <Form className="container">
          <div className="input">
            <Input
              name="courseName"
              type="text"
              holder="Enter the course name"
              className="input_value"
            />

            <Input
              name="courseDuration"
              holder="Enter the course duration"
              className="input_value"
            />
          </div>
          <div className="input">
            <Input
              name="courseTiming"
              type="text"
              holder="Enter the course Timing"
            />

            <Input
              name="noOfStudents"
              holder="Enter no of students enrolled for this course"
              type="email"
            />
          </div>
          <div className="input">
            <Input
              name="courseDescription"
              type="text"
              holder="Enter the course description"
            />
          </div>

          <div className="btn">
            <button type="submit" className="button" onClick={handleSubmit}>
              {id ? "UPDATE" : "ADD COURSE"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddCourses;

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
