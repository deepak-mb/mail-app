import { LOGIN, LOGOUT, SEND_EMAIL, GET_EMAILS, GET_FULL_MAIL } from "./types";
import axios from "axios";

// Making api calls to fetch data and pass it onto server
// Login API call
export const login = () => dispatch => {
  dispatch({
    type: LOGIN,
    payload: true
  });
};

// Logout API call
export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT,
    payload: false
  });
};

// Send email API call
export const sendEmail = email => async dispatch => {
  // axios.post(`http://localhost:3000/sentEmails`, email).then(res => {
  // console.log(res.data);
  dispatch({
    type: SEND_EMAIL,
    payload: email
  });
  // });
};

// Fetch emails API call
export const getEmails = () => async dispatch => {
  await axios.get(`http://localhost:3000/receivedEmails`).then(res => {
    dispatch({
      type: GET_EMAILS,
      payload: res.data
    });
  });
};

// Get full email API call
export const getFullMail = id => async dispatch => {
  await axios.get(`http://localhost:3000/receivedEmails/${id}`).then(res => {
    dispatch({
      type: GET_FULL_MAIL,
      payload: res.data
    });
  });
};
