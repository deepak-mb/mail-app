// The inbox component
import React, { Component } from "react";
import { connect } from "react-redux";
import { getTrashMails } from "../../actions/mailActions";
import MailList from "./MailList";
import PageTitle from "../layout/PageTitle";

class TrashMails extends Component {
  // If the component is loaded, fetch the email list
  componentDidMount() {
    this.props.getTrashMails();
  }
  // Rendering the component
  render() {
    const { trashMails } = this.props;
    // console.log(this.props);
    return (
      <div>
        <PageTitle title="Trash Mails" />
        <div className="card mail-links">
          {/* Passing the details to another component to render the list*/}
          {trashMails.map(mail => (
            <MailList key={mail.id} mail={mail} type="trash" />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trashMails: state.mails.trashMails
});

export default connect(
  mapStateToProps,
  { getTrashMails }
)(TrashMails);
