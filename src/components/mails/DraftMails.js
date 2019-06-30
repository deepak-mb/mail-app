// The inbox component
import React, { Component } from "react";
import { connect } from "react-redux";
import { getDraftMails } from "../../actions/mailActions";
import MailList from "./MailList";
import PageTitle from "../layout/PageTitle";

class DraftMails extends Component {
  // If the component is loaded, fetch the email list
  componentDidMount() {
    this.props.getDraftMails();
  }
  // Rendering the component
  render() {
    const { draftMails } = this.props;
    return (
      <div>
        <PageTitle title="Draft Mails" />
        <div className="card mail-links">
          {/* Passing the details to another component to render the list*/}
          {draftMails.map(mail => (
            <MailList key={mail.id} mail={mail} type="drafts" />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  draftMails: state.mails.draftMails
});

export default connect(
  mapStateToProps,
  { getDraftMails }
)(DraftMails);
