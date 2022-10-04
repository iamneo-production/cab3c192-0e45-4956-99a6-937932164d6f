import { courseConstants } from "../constants";

const initialState = {
  courses: [],
  inputValues: {
    courseName: "",
    courseDuration: "",
    courseTiming: "",
    noOfStudents: "",
    courseDescription: "",
  },
};
export function course(state = initialState, action) {
  switch (action.type) {
    case courseConstants.ADD__COURSESS:
      return {
        ...state,
        courses: [...state.courses, { ...action.data }],
      };
    case courseConstants.REMOVE__COURSESS:
      return {
        ...state,
        courses: action.data,
      };
    case courseConstants.UPDATE__COURSEDETAILS:
      console.log(action.data);
      return {
        ...state,
        courses: action.data,
      };
    case courseConstants.EDIT__COURSES:
      return {
        ...state,
        inputValues: action.data,
      };
    default:
      return state;
  }
}
