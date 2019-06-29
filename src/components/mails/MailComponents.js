// The control list component
import React, { Component } from "react";
import { Link } from "react-router-dom";

class MailComponents extends Component {
  // Redering the left control panel
  render() {
    return (
      <div className="col-2">
        <div className="p-2">
          <Link
            to="/compose"
            className="btn my-2 btn-outline-success ctrl-btns"
          >
            Compose
          </Link>
          <Link to="/inbox" className="btn my-2 btn-outline-primary ctrl-btns">
            Inbox
          </Link>
          <Link to="/sent" className="btn my-2 btn-outline-primary ctrl-btns">
            Sent
          </Link>
          <Link to="/drafts" className="btn my-2 btn-outline-primary ctrl-btns">
            Drafts
          </Link>
          <Link to="/trash" className="btn my-2 btn-outline-danger ctrl-btns">
            Trash
          </Link>
        </div>
      </div>
    );
  }
}

export default MailComponents;
