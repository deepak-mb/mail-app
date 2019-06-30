// The list component to render emails in inbox
import React, { Component } from "react";
import { Link } from "react-router-dom";

class MailList extends Component {
  render() {
    let { id, from, body, date, opened } = this.props.mail;
    let { type } = this.props;
    // Checking if the mail has been opened or not
    var classlist;
    if (type === "inbox") {
      if (opened === "false") {
        classlist = "font-weight-bold";
      }
    } else {
      classlist = "";
    }
    // Redering the mail list
    return (
      <Link to={`/${type}/${id}`}>
        <div
          className={`row m-2 px-2 py-2 email-list, ${classlist}`}
          style={{ border: "1px solid rgba(0,0,0,.125)" }}
        >
          <div className="col-3 handle-overflow">{from}</div>
          <div className="col-7 handle-overflow">{body}</div>
          <div className="col-2">{date}</div>
        </div>
      </Link>
    );
  }
}

export default MailList;
