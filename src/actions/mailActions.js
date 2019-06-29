import { LOGIN, LOGOUT, SEND_EMAIL, GET_EMAILS, GET_FULL_MAIL } from "./types";
import axios from "axios";

export const login = () => dispatch => {
  dispatch({
    type: LOGIN,
    payload: true
  });
};

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT,
    payload: false
  });
};

export const sendEmail = email => async dispatch => {
  // axios.post(`http://localhost:3000/sentEmails`, email).then(res => {
  // console.log(res.data);
  dispatch({
    type: SEND_EMAIL,
    payload: email
  });
  // });
};

export const getEmails = () => async dispatch => {
  await axios.get(`http://localhost:3000/receivedEmails`).then(res => {
    dispatch({
      type: GET_EMAILS,
      payload: res.data
    });
  });
};

export const getFullMail = id => async dispatch => {
  await axios.get(`http://localhost:3000/receivedEmails/${id}`).then(res => {
    dispatch({
      type: GET_FULL_MAIL,
      payload: res.data
    });
  });
};
