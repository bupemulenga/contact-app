//Example Class Componment
import React from "react";

class AddContact extends React.Component {
  state = {
    id: "",
    name: "",
    email: "",
    number: "",
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, name, email, number } = this.state;
    if (id === "" || name === "" || email === "" || number === "") {
      alert("Please fill in all fields");
      return;
    } else {
      this.props.addContact(this.state);
      this.setState({ id: "", name: "", email: "", number: "" });
    }
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="id">Contact Id</label>
            <input
              type="number"
              name="id"
              value={this.state.id}
              placeholder="Contact Id"
              onChange={this.handleOnChange}
            />
          </div>
          <div className="field">
            <label htmlFor="name">Contact Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Contact Name"
              onChange={this.handleOnChange}
            />
          </div>
          <div className="field">
            <label htmlFor="number">Contact Number</label>
            <input
              type="text"
              name="number"
              value={this.state.number}
              placeholder="Contact Number"
              onChange={this.handleOnChange}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              placeholder="Email Address"
              onChange={this.handleOnChange}
            />
          </div>
          <button className="ui button blue">Save</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
