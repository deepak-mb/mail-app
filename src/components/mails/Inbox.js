import React, { Component } from "react";
import { connect } from "react-redux";
import { getEmails } from "../../actions/mailActions";
import InboxList from "./InboxList";

class Inbox extends Component {
  componentDidMount() {
    this.props.getEmails();
  }
  render() {
    const { inboxMails } = this.props;
    // console.log(inboxMails);
    return (
      <div className="card mail-links">
        {inboxMails.map(mail => (
          <InboxList key={mail.id} mail={mail} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  inboxMails: state.mails.inbox
});

export default connect(
  mapStateToProps,
  { getEmails }
)(Inbox);
