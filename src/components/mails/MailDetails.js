import React, { Component } from "react";
import { connect } from "react-redux";
import { getFullMail } from "../../actions/mailActions";

class MailDetails extends Component {
  state = {
    id: "",
    attachments: "",
    body: "",
    conversations: "",
    date: "",
    from: "",
    subject: ""
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getFullMail(id);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.fullMail.id,
      attachments: nextProps.fullMail.attachments,
      body: nextProps.fullMail.body,
      conversations: nextProps.fullMail.conversations,
      date: nextProps.fullMail.date,
      from: nextProps.fullMail.from,
      subject: nextProps.fullMail.subject
    });
  }
  render() {
    const { conversations } = this.state;
    if (!conversations) {
      return <p>Loading...</p>;
    } else {
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
  fullMail: state.mails.fullMail
});

export default connect(
  mapStateToProps,
  { getFullMail }
)(MailDetails);
