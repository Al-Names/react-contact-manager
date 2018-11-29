import React, { Component } from "react";
import PropTypes from "prop-types";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "dummy@gmail.com",
        phone: "555-DUMMY-123"
      },
      {
        id: 2,
        name: "Jane Ray",
        email: "dummypuns@gmail.com",
        phone: "555-DUMMY-122"
      },
      {
        id: 3,
        name: "Tarzan Sting",
        email: "train@gmail.com",
        phone: "555-DUMMY-127"
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}
export default Contacts;

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
