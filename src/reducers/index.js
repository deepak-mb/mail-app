// Creating a root reducer, basically and meeting point for all the reducers to be loaded on the app

import { combineReducers } from "redux";
import mailReducer from "./mailReducer";

export default combineReducers({
  mails: mailReducer
});
