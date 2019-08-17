import { combineReducers } from "redux";
import smurfReducer from "./smurfReducer";
import postReducer from "./postSmurfReducer";

export default combineReducers({
  smurfReducer,
  postReducer
});
