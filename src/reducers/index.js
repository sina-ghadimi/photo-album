import { combineReducers } from "redux";
import picsReducer from "./picsReducer";

export default combineReducers({
  pics: picsReducer,
});
