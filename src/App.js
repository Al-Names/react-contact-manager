import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Provider } from "./context";

import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import Header from "./components/layout/Header";

class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <Header />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
