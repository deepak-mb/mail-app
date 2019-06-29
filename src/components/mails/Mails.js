import React, { Component } from "react";
//Components
import Compose from "./Compose";
import Inbox from "./Inbox";

class Mails extends Component {
  render() {
    return (
      <div className="">
        <Compose />
        <Inbox />
      </div>
    );
  }
}

export default Mails;
