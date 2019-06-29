import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/mailActions";
import InputButton from "./InputButton";

class Login extends Component {
  state = {
    email: "testuser@test.com",
    password: "password",
    loggedIn: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (email === "testuser@test.com" && password === "password") {
      sessionStorage.setItem("loggedIn", "true");
      window.location.reload();
    } else {
      alert(`Incorrect Login credentials.`);
    }
  };
  render() {
    return (
      <div className="d-flex p-4" style={{ marginTop: "5rem" }}>
        <form
          className="col-4"
          style={{ margin: "auto" }}
          onSubmit={this.onSubmit}
        >
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <InputButton
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter email"
              name="email"
              defaultValue="testuser@test.com"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <InputButton
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              defaultValue="password"
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

const mapStateToProps = state => ({
  loggedIn: state.mails.loggedIn
});

// export default connect(
//   mapStateToProps,
//   { login }
// )(Login);

export default Login;
