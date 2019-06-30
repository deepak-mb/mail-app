// The inbox component
import React, { Component } from "react";
import { connect } from "react-redux";
import { getSentMails } from "../../actions/mailActions";
import MailList from "./MailList";
import PageTitle from "../layout/PageTitle";

class SentMails extends Component {
  // If the component is loaded, fetch the email list
  componentDidMount() {
    this.props.getSentMails();
  }
  // Rendering the component
  render() {
    const { sentMails } = this.props;
    if (sentMails) {
      return (
        <div>
          <PageTitle title="Sent Mails" />
          <div className="card mail-links">
            {/* Passing the details to another component to render the list*/}
            {sentMails.map(mail => (
              <MailList key={mail.id} mail={mail} type="sentMails" />
            ))}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  sentMails: state.mails.sentMails
});

export default connect(
  mapStateToProps,
  { getSentMails }
)(SentMails);
