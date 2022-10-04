import { combineReducers } from "redux";
import { global } from "./global";
import { course } from "./course";
import { student } from "./students";

const rootReducer = combineReducers({
  global,
  course,
  student,
});

export default rootReducer;
