import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: " ",
    email: "",
    phone: "",
    showForm: false
  };

  onShowForm = e => {
    this.setState({ showForm: !this.state.showForm });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  onChange = e => this.setState({ [e.target.name]: e.target.calue });

  render() {
    const { name, email, phone } = this.state;
    const { showForm } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">
          Add Contact
          <i
            onClick={this.onShowForm}
            className="fas fa-plus"
            style={{ color: "green", float: "right", cursor: "pointer" }}
          />
        </div>

        {showForm ? (
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name: </label>
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-lg"
                  value={name}
                  onChange={this.onChange}
                  placeholder="Enter name..."
                />
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-lg"
                  value={email}
                  onChange={this.onChange}
                  placeholder="Enter email..."
                />
                <label htmlFor="phone">Phone: </label>
                <input
                  type="text"
                  name="phone"
                  className="form-control form-control-lg"
                  value={phone}
                  onChange={this.onChange}
                  placeholder="Enter phone..."
                />
              </div>
              <input
                type="submit"
                value="Add Contact"
                className="btn btn-light btn-block"
              />
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}
export default AddContact;
