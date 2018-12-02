/* eslint-disable default-case */
import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };

    default:
      return state;
  }
};
export class Provider extends Component {
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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
