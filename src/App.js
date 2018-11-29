import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Contacts from "./components/Contacts";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
