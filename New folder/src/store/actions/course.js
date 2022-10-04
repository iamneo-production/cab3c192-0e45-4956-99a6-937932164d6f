import { courseConstants } from "../constants";

export const addCourses = (data) => {
  return {
    type: courseConstants.ADD__COURSESS,
    data: data,
  };
};

export const removeCourses = (data) => {
  return {
    type: courseConstants.REMOVE__COURSESS,
    data: data,
  };
};

export const addCourseInputValues = (data) => {
  return {
    type: courseConstants.EDIT__COURSES,
    data: data,
  };
};

export const updateCourseDetails = (data) => {
  return {
    type: courseConstants.UPDATE__COURSEDETAILS,
    data: data,
  };
};
