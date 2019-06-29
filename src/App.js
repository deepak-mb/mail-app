import React, { Component } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Navbar from "./components/layout/Navbar";
import MailComponents from "./components/mails/MailComponents";
import Login from "./components/layout/Login";
import Mails from "./components/mails/Mails";
import Compose from "./components/mails/Compose";
import Inbox from "./components/mails/Inbox";
import InboxList from "./components/mails/InboxList";
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
          {loggedIn === "false" ? <Login /> : null}
          <div className="">
            <Navbar />
            {loggedIn !== "false" ? (
              <div className="row">
                <MailComponents />
                <div className="col-10" style={{ marginTop: "5rem" }}>
                  <Route exact path="/mails" component={Mails} />
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
            ) : null}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
