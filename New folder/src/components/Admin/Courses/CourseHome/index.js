import React from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LoupeIcon from "@mui/icons-material/Loupe";

import {
  addCourseInputValues,
  removeCourses,
} from "../../../../store/actions/course";

const CourseHome = () => {
  const { courses } = useSelector((state) => state.course);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (i) => {
    const filteredData = courses.filter((item, index) => i !== index);
    console.log(filteredData);
    dispatch(removeCourses(filteredData));
  };

  const handleEdit = (data, i) => {
    dispatch(addCourseInputValues(data));
    navigate("/addCourse/" + (+i + 1));
  };

  const handleAddAcademy = () => {
    dispatch(
      addCourseInputValues({
        courseName: "",
        courseDuration: "",
        courseTiming: "",
        noOfStudents: "",
        courseDescription: "",
      })
    );
    navigate("/addCourse");
  };

  return (
    <div className="bg_container">
      <div className="ui_icon_input">
        <input
          className="prompt"
          type="text"
          placeholder="Type here to search Academy"
        />
        <button className="search__button">Search</button>
      </div>

      <ul className="acadmey_containers">
        {courses.length ? (
          courses.map((item, i) => (
            <div className="result" key={i}>
              <div className="coruses">
                <p className="details">Course name :{item.courseName}</p>
                <p className="details">
                  Number of Student :{item.noOfStudents}
                </p>
              </div>
              <div className="coruses">
                <p className="details">
                  Course Duration :{item.courseDuration}
                </p>
                <p className="details">
                  Course description :{item.courseDescription}
                </p>
              </div>
              <div className="coruses">
                <p className="details">
                  Course Available Timings :{item.courseTiming}
                </p>

                <div className="icon_container">
                  <EditIcon
                    className="icon_container--edit"
                    onClick={() => handleEdit(item, i)}
                  />
                  <DeleteIcon
                    className="icon_container--delete"
                    onClick={() => handleDelete(i)}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1 className="no__academies">No Course</h1>
        )}
      </ul>
      <div className="add_button_container">
        <button className="button" onClick={handleAddAcademy}>
          <LoupeIcon />
          Add Course
        </button>
      </div>
    </div>
  );
};

export default CourseHome;
