// Meeting point for all the components of the app
import React, { Component } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Getting all the components
import Navbar from "./components/layout/Navbar";
import MailComponents from "./components/mails/MailComponents";
import Login from "./components/layout/Login";
import Compose from "./components/mails/Compose";
import Inbox from "./components/mails/Inbox";
import SentMails from "./components/mails/SentMails";
import DraftMails from "./components/mails/DraftMails";
import TrashMails from "./components/mails/TrashMails";
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
      // Connecting redux store with the app
      <Provider store={store}>
        <Router>
          <Navbar />
          <div className="container">
            {/* Checking if user is logged in and displaying components based on the status  */}
            {loggedIn !== "false" ? (
              <div className="row" style={{ paddingTop: "5rem" }}>
                <MailComponents />
                <div className="col-10">
                  <Switch>
                    <Route exact path="/compose" component={Compose} />

                    <Route exact path="/inbox" component={Inbox} />
                    <Route exact path="/inbox/:id" component={MailDetails} />

                    <Route exact path="/sent" component={SentMails} />
                    <Route
                      exact
                      path="/sentMails/:id"
                      component={MailDetails}
                    />

                    <Route exact path="/drafts" component={DraftMails} />

                    <Route exact path="/drafts/:id" component={MailDetails} />

                    <Route exact path="/trash" component={TrashMails} />

                    <Route exact path="/trash/:id" component={MailDetails} />
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
