// The inbox component
import React, { Component } from "react";
import { connect } from "react-redux";
import { getEmails } from "../../actions/mailActions";
import InboxList from "./InboxList";

class Inbox extends Component {
  // If the component is loaded, fetch the email list
  componentDidMount() {
    this.props.getEmails();
  }
  // Rendering the component
  render() {
    const { inboxMails } = this.props;
    return (
      <div className="card mail-links">
        {/* Passing the details to another component to render the list*/}
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
