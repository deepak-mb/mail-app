// The list component to render emails in inbox
import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

class InboxList extends Component {
  render() {
    let { id, from, body, date, opened } = this.props.mail;
    // Checking if the mail has been opened or not
    if (opened === "true") {
      opened = "";
    }
    // Redering the mail list
    return (
      <Link to={`/mailDetails/${id}`}>
        <div
          className={classnames("row m-2 px-2 email-list", {
            "font-weight-bold": opened
          })}
        >
          <div className="col-3 handle-overflow">{from}</div>
          <div className="col-7 handle-overflow">{body}</div>
          <div className="col-2">{date}</div>
        </div>
      </Link>
    );
  }
}

export default InboxList;
