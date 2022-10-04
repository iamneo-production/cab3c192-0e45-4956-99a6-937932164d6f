import React from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LoupeIcon from "@mui/icons-material/Loupe";
import { addStudentInputValues } from "../../../../store/actions/student";
import { removeCourses } from "../../../../store/actions/course";

const StudentHome = () => {
  const { students } = useSelector((state) => state.student);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (i) => {
    const filteredData = students.filter((item, index) => i !== index);
    console.log(filteredData);
    dispatch(removeCourses(filteredData));
  };

  const handleEdit = (data, i) => {
    dispatch(addStudentInputValues(data));
    navigate("/addstudent/" + (+i + 1));
  };

  const handleAddAcademy = () => {
    dispatch(
      addStudentInputValues({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        alternativeNumber: "",
        emailId: "",
        age: "",
        houseNo: "",
        streetName: "",
        areaName: "",
        pinCode: "",
        state: "",
        nationality: "",
      })
    );
    navigate("/addstudent");
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
      <div className="header_container">
        <p className="name">Student Id</p>
        <p className="name">Student Name</p>
        <p className="name">Enrolled Course</p>
        <p className="name">Mobile Number</p>
        <p className="name">Actions</p>
      </div>

      <ul className="acadmey_containers">
        {students.length ? (
          students.map((item, i) => (
            <div className="header_containers" key={i}>
              <p className="name">Student Id</p>
              <p className="name ">{item.firstName}</p>
              <p className="name ">Enrolled Course</p>
              <p className="name ">{item.phoneNumber1}</p>
              <div className="name">
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
          ))
        ) : (
          <h1 className="no__academies">No Students</h1>
        )}
      </ul>
      <div className="add_button_container">
        <button className="button" onClick={handleAddAcademy}>
          <LoupeIcon />
          Add Student
        </button>
      </div>
    </div>
  );
};

export default StudentHome;
