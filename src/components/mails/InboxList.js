import React, { Component } from "react";
import { Link } from "react-router-dom";
import MailDetails from "./MailDetails";
import classnames from "classnames";

class InboxList extends Component {
  render() {
    // console.log(this.props.mail);
    let { id, from, body, date, opened } = this.props.mail;
    // console.log(opened);
    if (opened === "true") {
      opened = "";
    }
    return (
      <Link to={`/mailDetails/${id}`}>
        <div
          className={classnames("row m-2 px-2 email-list", {
            "font-weight-bold": opened
          })}
          style={{}}
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
