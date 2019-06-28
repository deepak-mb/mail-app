import React, { Component } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";

//Components
import Navbar from "./components/layout/Navbar";
import Mails from "./components/mails/Mails";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navbar />
          <div>
            <Mails />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
