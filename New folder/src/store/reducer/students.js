import { studentConstants } from "../constants";

const initialState = {
  students: [],
  inputValues: {
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
  },
};
export function student(state = initialState, action) {
  switch (action.type) {
    case studentConstants.ADD__STUDENTS:
      return {
        ...state,
        students: [...state.students, { ...action.data }],
      };
    case studentConstants.REMOVE__STUDENTS:
      return {
        ...state,
        students: action.data,
      };
    case studentConstants.UPDATE__STUDENTDETAILS:
      console.log(action.data);
      return {
        ...state,
        students: action.data,
      };
    case studentConstants.EDIT__STUDENTS:
      return {
        ...state,
        inputValues: action.data,
      };
    default:
      return state;
  }
}
