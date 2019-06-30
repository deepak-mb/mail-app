// Manipulating the data and storing it in the store of redux
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
} from "../actions/types";

const initialState = {
  loggedIn: false,
  sentEmails: [],
  inbox: [],
  fullMail: [],
  sentMails: [],
  draftMails: [],
  trashMails: [],
  sentFullMail: [],
  draftFullMail: [],
  trashFullMail: []
};

// Executing tasks based on the data passed from the actions
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

    case SENT_MAILS:
      return {
        ...state,
        sentMails: action.payload
      };

    case GET_SENT_MAIL:
      return {
        ...state,
        sentFullMail: action.payload
      };

    case DRAFT_MAILS:
      return {
        ...state,
        draftMails: action.payload
      };

    case GET_DRAFT_MAIL:
      return {
        ...state,
        draftFullMail: action.payload
      };

    case TRASH_MAILS:
      return {
        ...state,
        trashMails: action.payload
      };

    case GET_TRASH_MAIL:
      return {
        ...state,
        trashFullMail: action.payload
      };

    default:
      return state;
  }
}
