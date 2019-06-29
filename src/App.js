import React, { Component } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Navbar from "./components/layout/Navbar";
import MailComponents from "./components/mails/MailComponents";
import Login from "./components/layout/Login";
import Compose from "./components/mails/Compose";
import Inbox from "./components/mails/Inbox";
import MailDetails from "./components/mails/MailDetails";

class App extends Component {
  state = {
    loggedIn: ""
  };
  componentDidMount() {
    let loggedIn = sessionStorage.getItem("loggedIn");
    this.setState({ loggedIn: loggedIn });
  }
  render() {
    const { loggedIn } = this.state;
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <div>
            {loggedIn !== "false" ? (
              <div className="row" style={{ paddingTop: "5rem" }}>
                <MailComponents />
                <div className="col-10">
                  <Switch>
                    <Route exact path="/compose" component={Compose} />
                    <Route exact path="/inbox" component={Inbox} />
                    <Route
                      exact
                      path="/mailDetails/:id"
                      component={MailDetails}
                    />
                  </Switch>
                </div>
              </div>
            ) : (
              <Login />
            )}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
