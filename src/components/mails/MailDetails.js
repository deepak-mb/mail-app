// The complete email component
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getFullMail,
  getSentMail,
  getDraftMail,
  getTrashMail
} from "../../actions/mailActions";

class MailDetails extends Component {
  state = {
    id: "",
    attachments: "",
    body: "",
    conversations: "",
    date: "",
    from: "",
    subject: "",
    singleMail: []
  };
  // Making an api call and fetching the email
  componentDidMount() {
    const { id } = this.props.match.params;
    let path = this.props.match.path;
    if (path === "/inbox/:id") {
      this.props.getFullMail(id);
    } else if (path === "/sentMails/:id") {
      this.props.getSentMail(id);
    } else if (path === "/drafts/:id") {
      this.props.getDraftMail(id);
    } else if (path === "/trash/:id") {
      this.props.getTrashMail(id);
    }
  }
  //Saving data to the state
  componentWillReceiveProps(nextProps) {
    let path = this.props.match.path;
    if (path === "/inbox/:id") {
      this.setState({
        id: nextProps.fullMail.id,
        attachments: nextProps.fullMail.attachments,
        body: nextProps.fullMail.body,
        conversations: nextProps.fullMail.conversations,
        date: nextProps.fullMail.date,
        from: nextProps.fullMail.from,
        subject: nextProps.fullMail.subject
      });
    } else if (path === "/sentMails/:id") {
      this.setState({ singleMail: nextProps.sentFullMail });
    } else if (path === "/drafts/:id") {
      this.setState({ singleMail: nextProps.draftFullMail });
    } else if (path === "/trash/:id") {
      this.setState({ singleMail: nextProps.trashFullMail });
    }
  }
  // Rendering the complete email
  render() {
    const { conversations } = this.state;
    if (!conversations) {
      let { from, subject, attachments, body } = this.state.singleMail;
      return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{subject}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{from}</h6>
            <p className="card-text">{body}</p>
            <a href={attachments} className="card-link">
              {attachments}
            </a>
          </div>
        </div>
      );
    } else {
      // console.log(conversations);
      return (
        <div className="accordion" id="accordionExample">
          {conversations.map((conversation, index) => (
            <div
              key={conversation.convId}
              className="card"
              style={{ paddingLeft: `${index}rem`, border: "none" }}
            >
              <div
                className="card-header"
                id={`heading-${conversation.convId}`}
                style={{
                  borderLeft: "1px solid rgba(0,0,0,.125)",
                  borderBottom: "none"
                }}
              >
                <h2 className="mb-0">
                  <button
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target={`#collapse-${conversation.convId}`}
                    aria-expanded="true"
                    aria-controls={`collapse-${conversation.convId}`}
                    style={{ textAlign: "left" }}
                  >
                    <h5 className="card-title">
                      Subject: {conversation.mail.subject}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      From: {conversation.mail.from}
                    </h6>
                  </button>
                </h2>
              </div>

              <div
                id={`collapse-${conversation.convId}`}
                className="collapse show"
                aria-labelledby={`heading-${conversation.convId}`}
                data-parent="#accordionExample"
                style={{ borderLeft: "1px solid rgba(0,0,0,.125)" }}
              >
                <div className="card-body">
                  <p className="card-text">
                    Message: <br />
                    {conversation.mail.body}
                  </p>
                  <a href="!#" className="card-link">
                    {conversation.mail.attachments}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  fullMail: state.mails.fullMail,
  sentFullMail: state.mails.sentFullMail,
  draftFullMail: state.mails.draftFullMail,
  trashFullMail: state.mails.trashFullMail
});

export default connect(
  mapStateToProps,
  { getFullMail, getSentMail, getDraftMail, getTrashMail }
)(MailDetails);
