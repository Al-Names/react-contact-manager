import React, { Component } from "react";

import Contact from "./Contact";

import { Consumer } from "../context";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <div>
              <h1 className="display-4 mb2">
                <span className="text-primary">Contact</span>
                List
              </h1>
              <div>
                {contacts.map(contact => (
                  <Contact key={contact.id} contact={contact} />
                ))}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
