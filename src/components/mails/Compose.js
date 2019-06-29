import React, { Component } from "react";
import { connect } from "react-redux";
import { sendEmail } from "../../actions/mailActions";
import uuid from "uuid";

class Compose extends Component {
  state = {
    id: "",
    to: "",
    subject: "",
    attachments: "",
    body: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const { id, to, subject, attachments, body } = this.state;
    if (to === undefined || to === "") {
      alert(`Please enter a recepient.`);
    } else {
      let toArr = to.split(",");
      let email = {
        id: uuid(),
        to: toArr,
        subject,
        attachments,
        body
      };
      this.props.sendEmail(email);
      alert(`Success! Email has been sent to ${to}`);
      this.onClear();
    }
  };
  onClear = () => {
    this.setState({ id: "", to: "", subject: "", attachments: "", body: "" });
  };
  render() {
    const { to, subject, attachments, body } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="toEmail">To:</label>
            <input
              type="text"
              className="form-control"
              id="toEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="to"
              value={to}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Enter subject"
              name="subject"
              value={subject}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="attachments">Attachments: </label>
            <input
              type="file"
              accept="/*"
              name="attachments"
              id="attachments"
              value={attachments}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Body:</label>
            <textarea
              className="form-control"
              rows="10"
              id="body"
              name="body"
              placeholder="Enter body"
              value={body}
              onChange={this.onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { sendEmail }
)(Compose);
