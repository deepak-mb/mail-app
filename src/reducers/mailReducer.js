import {
  LOGIN,
  LOGOUT,
  SEND_EMAIL,
  GET_EMAILS,
  GET_FULL_MAIL
} from "../actions/types";

const initialState = {
  loggedIn: false,
  sentEmails: [],
  inbox: [],
  fullMail: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        loggedIn: action.payload
      };

    case LOGOUT:
      return {
        loggedIn: action.payload
      };

    case SEND_EMAIL:
      return {
        ...state,
        sentEmails: [action.payload, ...state.sentEmails]
      };

    case GET_EMAILS:
      return {
        ...state,
        inbox: action.payload
      };

    case GET_FULL_MAIL:
      return {
        ...state,
        fullMail: action.payload
      };
    default:
      return state;
  }
}
