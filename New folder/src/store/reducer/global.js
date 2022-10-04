import { globalConstants } from "../constants";

const initialState = {
  academies: [],
  inputValues: {
    academyName: "",
    contactNumber: "",
    imageUrl: "",
    academyEmail: "",
    academyLocation: "",
    academyDesc: "",
  },
};
export function global(state = initialState, action) {
  switch (action.type) {
    case globalConstants.ADD__ACADEMIES:
      console.log(action.data, state.academies);
      return {
        ...state,
        academies: [...state.academies, { ...action.data }],
      };
    case globalConstants.REMOVE__ACADEMIES:
      return {
        ...state,
        academies: action.data,
      };
    case globalConstants.UPDATE__ACADEMYDETAILS:
      console.log(action.data);
      return {
        ...state,
        academies: action.data,
      };
    case globalConstants.EDIT__ACADEMIES:
      return {
        ...state,
        inputValues: action.data,
      };
    default:
      return state;
  }
}
