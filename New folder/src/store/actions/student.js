import { studentConstants } from "../constants";

export const addStudents = (data) => {
  return {
    type: studentConstants.ADD__STUDENTS,
    data: data,
  };
};

export const removeStudents = (data) => {
  return {
    type: studentConstants.REMOVE__STUDENTS,
    data: data,
  };
};

export const addStudentInputValues = (data) => {
  return {
    type: studentConstants.EDIT__STUDENTS,
    data: data,
  };
};

export const updateStudentDetails = (data) => {
  return {
    type: studentConstants.UPDATE__STUDENTDETAILS,
    data: data,
  };
};
