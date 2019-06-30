import {
  LOGIN,
  LOGOUT,
  SEND_EMAIL,
  GET_EMAILS,
  GET_FULL_MAIL,
  SENT_MAILS,
  GET_SENT_MAIL,
  GET_DRAFT_MAIL,
  DRAFT_MAILS,
  GET_TRASH_MAIL,
  TRASH_MAILS
} from "./types";
import axios from "axios";

//Git url: https://gist.githubusercontent.com/deepak-mb/f9bd7c57dcda4721f529926be25445c3/raw/49c5d9b17dc45eaf68c1c731973d01d4f93eb574/mail-app
//localhost url: http://localhost:3000/sentEmails

// Making api call to fetch data and pass it onto app
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

// Get sent mails
export const getSentMails = () => async dispatch => {
  await axios.get(`http://localhost:3000/sentMails`).then(res => {
    dispatch({
      type: SENT_MAILS,
      payload: res.data
    });
  });
};

// Get sent mail
export const getSentMail = id => async dispatch => {
  await axios.get(`http://localhost:3000/sentMails/${id}`).then(res => {
    dispatch({
      type: GET_SENT_MAIL,
      payload: res.data
    });
  });
};

// Get draft mails
export const getDraftMails = () => async dispatch => {
  await axios.get(`http://localhost:3000/draftMails`).then(res => {
    dispatch({
      type: DRAFT_MAILS,
      payload: res.data
    });
  });
};

// Get draft mails
export const getDraftMail = id => async dispatch => {
  await axios.get(`http://localhost:3000/draftMails/${id}`).then(res => {
    dispatch({
      type: GET_DRAFT_MAIL,
      payload: res.data
    });
  });
};

// Get trash mails
export const getTrashMails = () => async dispatch => {
  await axios.get(`http://localhost:3000/trashMails`).then(res => {
    dispatch({
      type: TRASH_MAILS,
      payload: res.data
    });
  });
};

// Get trash mails
export const getTrashMail = id => async dispatch => {
  await axios.get(`http://localhost:3000/trashMails/${id}`).then(res => {
    dispatch({
      type: GET_TRASH_MAIL,
      payload: res.data
    });
  });
};
