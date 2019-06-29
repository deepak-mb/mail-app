import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/mailActions";

class Navbar extends Component {
  state = {
    loggedIn: ""
  };
  onSubmit = e => {
    e.preventDefault();
    this.setState({ loggedIn: false });
    sessionStorage.setItem("loggedIn", "false");
    this.props.logout(false);
    window.location.reload();
  };
  componentDidMount() {
    let loggedIn = sessionStorage.getItem("loggedIn");
    this.setState({ loggedIn: loggedIn });
  }
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    // this.setState({ loggedIn: nextProps.loggedIn });
  }
  render() {
    const { loggedIn } = this.state;
    // console.log(loggedIn);
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="!#">
          Mail App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li> */}
          </ul>
          <form className="form-inline my-2 my-lg-0" onSubmit={this.onSubmit}>
            {loggedIn === "true" ? (
              <button className="btn btn-danger my-2 my-sm-0" type="submit">
                Logout
              </button>
            ) : null}
          </form>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({
  loggedIn: state.mails.loggedIn
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
